import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { Poster } from "../components/ShowTile";
import rebound from "rebound";
import { useEffect } from "react";

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

const calculateXOffsetForIndex = (index, scale) => {
  const imageWidth = 225;
  const offset = imageWidth - imageWidth * scale;
  return offset * selectOffsetScale[index];
};
const xPosVariants = [
  [0, 19, 35, 46, 55],
  [19, 0, -19, -35, -46],
  [35 / 2, 19 / 2, 0, -19 / 2, -35 / 2],
  [46 / 3, 35 / 3, 19 / 3, 0, -19 / 3],
  [55 / 4, 46 / 4, 35 / 4, 19 / 4, 0],
];

const transitionForProgressInRange = (progress, startValue, endValue) => {
  return startValue + progress * (endValue - startValue);
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
        // Progress from 0 to n
        var progress = spring.getCurrentValue();

        // Other transitions
        collection.forEach(function (val, i) {
          var slideProgress = 1 - Math.abs(progress - i);
         
    
          // Slide and scale the images
          var x = xPosVariants[i].[i] - progress * xPosVariants[endValue > 5 ? 5 : endValue].[i];

          // Filter the progress through an ease out curve and use that to control scaling
          var easeOutSlideProgress =
            slideProgress < 1 ? slideProgress * (2 - slideProgress) : 1;
          var scale = transitionForProgressInRange(
            easeOutSlideProgress,
            0.9,
            1.0
          );

          val.style["webkitTransform"] =
            "translate3d(" + x + "px, 0, 0) scale(" + scale + ")";
          val.style["MozTransform"] =
            "translate3d(" + x + "px, 0, 0) scale(" + scale + ")";

          // Fade in the caption when nearing rest
          if (i < captions.length) {
            var captionOpacity = transitionForProgressInRange(
              slideProgress,
              -8.0,
              1.0
            );
            captions[i].style["opacity"] = captionOpacity;
          }
     

          // Hide the off-screen images so they don't reveal themselves if you resize the browser
          // val.style["opacity"] = slideProgress > 0 ? 1.0 : 0.0;
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
