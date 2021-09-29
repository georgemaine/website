import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { Poster } from "../components/ShowTile";
import rebound from "rebound";
import { useEffect, useRef } from "react";
import {
  progressForValueInRange,
  calculateXOffsetForIndex,
  transitionForProgressInRange,
  transitionForProgressInSteps,
} from "../components/utils";

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
const selectOpacityIndex = [0.03, 0.14, 0.77, 0.67, 0.58];

// FIXME: Go from hardcoded values into calculated
const zSteps = {
  0: [0, -15, -30, -45, -60, -75],
  1: [-15, 0, -15, -30, -45, -60],
  2: [-30, -15, 0, -15, -30, -45],
  3: [-45, -30, -15, 0, -15, -30],
  4: [-60, -45, -30, -15, 0, -15],
};

const xSteps = {
  0: [-0, -19, -35, -46, -55],
  1: [19, -0, -19, -35, -46],
  2: [35, 19, -0, -19, -35],
  3: [46, 35, 19, -0, -19],
  4: [55, 46, 35, 19, -0],
};

const rotateSteps = {
  0: [-0, -2, -4, -6, -8],
  1: [2, -0, -2, -4, -6],
  2: [4, 2, 0, -2, -4],
  3: [6, 4, 2, 0, -2],
  4: [8, 6, 4, 2, 0],
};
const scaleSteps = {
  0: [1, 0.9, 0.82, 0.74, 0.68],
  1: [0.9, 1, 0.9, 0.82, 0.74],
  2: [0.82, 0.9, 1, 0.9, 0.82],
  3: [0.74, 0.82, 0.9, 1, 0.9],
  4: [0.68, 0.74, 0.82, 0.9, 1],
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

// Utils

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

const handlePanning = () => {
  const ref = document.querySelector(".collection");
  ref.addEventListener(
    "touchstart",
    function (e) {
      var touch = e.touches[0];
      startDragging(touch.pageX);
    },
    false
  );

  ref.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault(); // Stop vertical rubberbanding on iOS

      var touch = e.touches[0];
      continueDragging(touch.pageX);
    },
    false
  );

  ref.addEventListener(
    "touchend",
    function (e) {
      endTrackingInputMode("drag");
    },
    false
  );

  ref.addEventListener(
    "touchcancel",
    function (e) {
      endTrackingInputMode("drag");
    },
    false
  );

  ref.addEventListener(
    "mousedown",
    function (e) {
      startDragging(e.clientX);
    },
    false
  );

  ref.addEventListener(
    "mousemove",
    function (e) {
      if (isDragging) continueDragging(e.clientX);
    },
    false
  );

  ref.addEventListener(
    "mouseup",
    function (e) {
      endTrackingInputMode("drag");
    },
    false
  );

  ref.addEventListener(
    "mouseleave",
    function (e) {
      if (isDragging) endTrackingInputMode("drag");
    },
    false
  );

  // window.addEventListener(
  //   "wheel",
  //   function (e) {
  //     scrollWithVelocity(e.wheelDeltaX);
  //   },
  //   false
  // );

  return () => {
    ref.removeEventListener(
      "touchstart",
      function (e) {
        var touch = e.touches[0];
        startDragging(touch.pageX);
      },
      false
    );

    ref.removeEventListener(
      "touchmove",
      function (e) {
        e.preventDefault(); // Stop vertical rubberbanding on iOS

        var touch = e.touches[0];
        continueDragging(touch.pageX);
      },
      false
    );

    ref.removeEventListener(
      "touchend",
      function (e) {
        endTrackingInputMode("drag");
      },
      false
    );

    ref.removeEventListener(
      "touchcancel",
      function (e) {
        endTrackingInputMode("drag");
      },
      false
    );

    ref.removeEventListener(
      "mousedown",
      function (e) {
        startDragging(e.clientX);
      },
      false
    );

    ref.removeEventListener(
      "mousemove",
      function (e) {
        if (isDragging) continueDragging(e.clientX);
      },
      false
    );

    ref.removeEventListener(
      "mouseup",
      function (e) {
        endTrackingInputMode("drag");
      },
      false
    );

    ref.removeEventListener(
      "mouseleave",
      function (e) {
        if (isDragging) endTrackingInputMode("drag");
      },
      false
    );
    ref.removeEventListener(
      "mouseleave",
      function (e) {
        if (isDragging) endTrackingInputMode("drag");
      },
      false
    );
    // window.removeEventListener(
    //   "wheel",
    //   function (e) {
    //     scrollWithVelocity(e.wheelDeltaX);
    //   },
    //   false
    // );
  };
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

          // Filter the progress through an ease out curve and use that to control scaling
          var easeOutSlideProgress =
            slideProgress < 1 ? slideProgress * (2 - slideProgress) : 1;
          var rotate = transitionForProgressInSteps(progress, rotateSteps[i]);
          var scale = transitionForProgressInSteps(progress, scaleSteps[i]);
          var x = transitionForProgressInSteps(progress, xSteps[i]);
          var z = transitionForProgressInSteps(progress, zSteps[i]);

          val.style["webkitTransform"] =
            "translate3d(" +
            x +
            "px, 0," +
            z +
            "px) scale(" +
            scale +
            ") rotate(" +
            rotate +
            "deg)";
          val.style["MozTransform"] =
            "translate3d(" +
            x +
            "px, 0," +
            z +
            "px) scale(" +
            scale +
            ") rotate(" +
            rotate +
            "deg)";

          // Fade in the caption when nearing rest
          if (i < captions.length) {
            const captionOpacity = transitionForProgressInRange(
              slideProgress,
              -8.0,
              1.0
            );

            const shadowOpacity = transitionForProgressInRange(
              slideProgress,
              -8.0,
              0.09
            );
            collection[i].style[
              "box-shadow"
            ] = `10px 10px 20px 0px rgba(0,0,0, ${shadowOpacity}),-10px 0 20px 0px rgba(0,0,0, ${shadowOpacity})`;
            captions[i].style["opacity"] = captionOpacity;
          }
        });
      },
    });

    handlePanning();

    handleArrowKeys();
  }, []);

  return (
    <main>
      <Head />
      <GlobalNav />
      <ul className='collection'>
        {collection.map((value, i) => {
          const scale = selectScaleIndex[i];
          const x = calculateXOffsetForIndex(i, scale);
          const opacity = selectOpacityIndex[i];
          const z = -1 * i;
          const rotate = i * 2;
          return (
            <li key={i}>
              <Poster
                src={value.image}
                caption={value.name}
                description={value.description}
                opacity={opacity}
                index={i}
                style={{
                  transform: `translate3d(${x}px, 0,${z}px) rotate(${rotate}deg) scale(${scale})`,
                }}
              />
            </li>
          );
        })}
      </ul>
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

const startDragging = (x) => {
  lastX = x;
  isDragging = true;
  viewportWidth = 225;
  mainSpring.setAtRest();
};

const continueDragging = (x) => {
  panVelocity = x - lastX;
  lastX = x;

  continueTrackingWithDelta(panVelocity);
};

const continueTrackingWithDelta = (delta) => {
  panVelocity = delta;

  var progress = progressForValueInRange(delta, 0, -viewportWidth);

  var currentValue = mainSpring.getCurrentValue();

  // Rubberband when beyond the scroll boundaries
  if (
    currentValue + progress < 0 ||
    currentValue + progress > collection.length - 1
  ) {
    progress *= 0.5;
  }

  mainSpring.setCurrentValue(currentValue + progress);
  mainSpring.setAtRest();
};

const endTrackingInputMode = (inputMode) => {
  var currentPosition = mainSpring.getCurrentValue();
  var startPosition = endValue;

  var positionDelta = currentPosition - startPosition;
  var swipingTowardsCurrentPage =
    (positionDelta > 0 && panVelocity > 0) ||
    (positionDelta < 0 && panVelocity < 0);
  var passedVelocityTolerance = Math.abs(panVelocity) > 3;
  var passedDistanceTolerance = Math.abs(positionDelta) > 0.3;

  if (inputMode == "desktop-scroll") {
    passedDistanceTolerance = true;
  }

  var shouldAdvance =
    (passedDistanceTolerance || passedVelocityTolerance) &&
    !swipingTowardsCurrentPage;
  var directionIsForward = panVelocity <= 0;

  if (shouldAdvance) {
    var targetIndex;

    if (currentPosition == startPosition) {
      // Current position is integral i.e. no tracking
      targetIndex = directionIsForward
        ? currentPosition + 1
        : currentPosition - 1;
    } else {
      targetIndex = directionIsForward
        ? Math.ceil(currentPosition)
        : Math.floor(currentPosition);
    }

    setMovieIndex(targetIndex, true);
  } else {
    setMovieIndex(startPosition, true);
  }

  var normalizedVelocity = progressForValueInRange(
    panVelocity,
    0,
    -viewportWidth
  );
  mainSpring.setVelocity(normalizedVelocity * 30);
  panVelocity = 0;
  isDragging = false;
};
