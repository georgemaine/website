import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { Poster } from "../components/ShowTile";
import rebound from "rebound";
import { useEffect } from "react";

const log = (element) => {
  console.log("element:", element);
};

const collection = [
  {
    name: "The morning show",
    image: "show1.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "Ted Lasso",
    image: "show2.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "See",
    image: "show3.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "Truth be told",
    image: "show4.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "The broadway musical",
    image: "show5.jpg",
    description: "Type · Genre · Releasedate",
  },
];

var downIndex = 0;
var endValue = 0;
var startIndex = 0;
var viewportWidth = 0;
var viewportHeight = 0;

const selectScaleIndex = [1, 0.9, 0.82, 0.74, 0.68];
const selectOffsetScale = [1, 0.86, 0.86, 0.78, 0.77];
const selectOpacityIndex = [0.03, 0.14, 0.77, 0.67, 0.58];

// FIXME: Go from hardcoded values into calculated
const zVariants = {
  0: [0, -1, -2, -3, -4, -5],
  1: [1, 0, -1, -2, -3, -4],
  2: [-2, -1, 0, -1, -2, -3],
  3: [-3, -2, -1, 0, -1, -2],
  4: [-4, -3, -2, -1, 0, -1],
};

const rotateVariants = {
  0: [0, -2, -4, -6, -8, -8],
  1: [2, 0, -2, -4, -6, -8],
  2: [4, 2, 0, -2, -4, -6],
  3: [6, 4, 2, 0, -2, -4],
  4: [8, 6, 4, 2, 0, -2],
};

const xVariants = {
  0: [0, 19, 35, 46, 55],
  1: [19, 0, -19, -35, -46],
  2: [35 / 2, 19 / 2, 0, -19 / 2, -35 / 2],
  3: [46 / 3, 35 / 3, 19 / 3, 0, -19 / 3],
  4: [55 / 4, 46 / 4, 35 / 4, 19 / 4, 0],
};

const scaleStartValue = {
  0: [1, 1, 0.9, 0.82, 0.74, 0.68],
  1: [0.9, 0.9, 1, 0.9, 0.82],
  2: [0.82, 0.82, 0.9, 1, 0.9],
  3: [0.74, 0.74, 0.82, 0.9, 1],
  4: [0.68, 0.68, 0.74, 0.82, 0.9],
};

const scaleEndValue = {
  0: [0.9, 0.1, 0.08 / 2, 0.08 / 3, 0.06 / 4],
  1: [1, -0.1, 0.1 / 2, 0.08 / 3, 0.08 / 4],
  2: [0.9, -0.08, -0.1 / 2, 0.1 / 3, 0.08 / 4],
  3: [0.82, -0.08, -0.08 / 2, -0.1 / 3, 0.1 / 4],
  4: [0.74, -0.06, -0.08 / 2, -0.08 / 3, -0.1 / 4],
};

var springSystem = new rebound.SpringSystem();
var mainSpring = springSystem.createSpring();
var downSpring = springSystem.createSpring();

mainSpring.setSpringConfig(
  rebound.SpringConfig.fromOrigamiTensionAndFriction(4.5, 5.7)
);

var lastX = 0;
var panVelocity = 0;
var isDragging = false;
var shouldStartDetectingGesture = true;
var isCurrentlyDetectingGesture = false;
var endOfDetectionTimer;
var restartDetectionTimer;

// Utils
const calculateXOffsetForIndex = (index, scale) => {
  const imageWidth = 225;
  const offset = imageWidth - imageWidth * scale;
  return offset * selectOffsetScale[index];
};

const transitionForProgressInRange = (progress, startValue, endValue) => {
  return startValue + progress * (endValue - startValue);
};

const mapValueFromRangeToRange = (value, fromLow, fromHigh, toLow, toHigh) => {
  const fromRangeSize = fromHigh - fromLow;
  const toRangeSize = toHigh - toLow;
  const valueScale = (value - fromLow) / fromRangeSize;
  return toLow + valueScale * toRangeSize;
};

const setMovieIndex = (i, animated) => {
  if (i < 0) i = 0;
  else if (i > collection.length - 1) i = collection.length - 1;

  if (animated) {
    viewportWidth = 225;
    endValue = i;
    mainSpring.setEndValue(i);
  } else {
    mainSpring.setCurrentValue(i);
  }
};

const handleArrowKeys = () => {
  var initialPress = true;
  var isRubberbanding = false;
  const handleKeyDown = (e) => {
    var currentIndex = endValue;

    var positionTolerance = 0.001;
    var maxRubberbandDistance = 0.03; // Normalized

    if (e.keyCode == 37) {
      // Left arrow key
      var inRubberbandableRegion =
        mainSpring.getCurrentValue() < positionTolerance;

      if (inRubberbandableRegion && initialPress) {
        isRubberbanding = true;
        mainSpring.setEndValue(
          mainSpring.getCurrentValue() - maxRubberbandDistance
        );
      } else if (!inRubberbandableRegion) {
        isRubberbanding = false;
        setMovieIndex(currentIndex - 1, true);
      }
    } else if (e.keyCode == 39) {
      // Right arrow key
      var inRubberbandableRegion =
        mainSpring.getCurrentValue() >
        collection.length - 1 - positionTolerance;

      if (inRubberbandableRegion && initialPress) {
        isRubberbanding = true;
        mainSpring.setEndValue(
          mainSpring.getCurrentValue() + maxRubberbandDistance
        );
      } else if (!inRubberbandableRegion) {
        isRubberbanding = false;
        setMovieIndex(currentIndex + 1, true);
      }
    }

    initialPress = false;
  };

  // When rubberbanding, snap back to the correct rest value on key up
  const handleKeyUp = (e) => {
    var currentIndex = endValue;

    if (e.key == "ArrowLeft" && isRubberbanding) {
      // Left arrow key
      setMovieIndex(currentIndex - 1, true);
      startIndex = endValue - 1;
    } else if (e.key == "ArrowRight" && isRubberbanding) {
      // Right arrow key
      startIndex = endValue + 1;
      setMovieIndex(currentIndex + 1, true);
    }

    isRubberbanding = false;
    initialPress = true;
  };
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };
};

export default function MovieList() {
  useEffect(() => {
    const collection = document.querySelectorAll(".movie");
    const captions = document.querySelectorAll(".caption");

    mainSpring.addListener({
      onSpringUpdate: function (spring) {
        var progress = spring.getCurrentValue();

        // Other transitions
        collection.forEach(function (val, i) {
          var slideProgress = 1 - Math.abs(progress - i);

          // Slide and transition the images
          var x =
            xVariants[i][i] -
            progress * xVariants[endValue > 5 ? 5 : endValue][i];
          var rotate =
            rotateVariants[i][i] -
            progress * rotateVariants[endValue > 5 ? 5 : endValue][i];

          // Filter the progress through an ease out curve and use that to control scaling
          var easeOutSlideProgress =
            slideProgress < 1 ? slideProgress * (2 - slideProgress) : 1;
          var scale =
            scaleStartValue[i][endValue] -
            progress * scaleEndValue[i][endValue];

          // if (progress > 1 && i === 4) {
          //   log(scaleStartValue[i][endValue]);
          //   log(scaleEndValue[i][endValue]);
          //   log(progress);
          //   log(progress * scaleEndValue[i][endValue]);
          // }

          val.style["webkitTransform"] =
            "translate3d(" +
            x +
            "px, 0," +
            i * -1 +
            "px) scale(" +
            scale +
            ") rotate(" +
            rotate +
            "deg)";
          val.style["MozTransform"] =
            "translate3d(" +
            x +
            "px, 0," +
            i * -1 +
            "px) scale(" +
            scale +
            ") rotate(" +
            rotate +
            "deg)";

          // Fade in the caption when nearing rest
          if (i < captions.length) {
            var captionOpacity = transitionForProgressInRange(
              slideProgress,
              -8.0,
              1.0
            );
            captions[i].style["opacity"] = captionOpacity;
          }
        });
      },
    });

    handleArrowKeys();
  }, []);
  return (
    <main>
      <Head />
      <GlobalNav />
      {collection.map((value, i) => {
        const scale = selectScaleIndex[i];
        const x = calculateXOffsetForIndex(i, scale);
        const opacity = selectOpacityIndex[i];
        const z = -1 * i;
        const rotate = i * 2;
        return (
          <Poster
            key={i}
            src={value.image}
            caption={value.name}
            description={value.description}
            opacity={opacity}
            index={i}
            style={{
              transform: `translate3d(${x}px, 0,${z}px) rotate(${rotate}deg) scale(${scale})`,
            }}
          />
        );
      })}
      <style jsx>{`
        main {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform-style: preserve-3d;
        }
      `}</style>
    </main>
  );
}
