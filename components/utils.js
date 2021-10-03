import { useState, useEffect } from "react";

export const calculateXOffsetForIndex = (index, scale) => {
  const selectOffsetScale = [1, 0.86, 0.86, 0.78, 0.77];
  const imageWidth = 225;
  const offset = imageWidth - imageWidth * scale;
  return offset * selectOffsetScale[index];
};

export const transitionForProgressInRange = (
  progress,
  startValue,
  endValue
) => {
  return startValue + progress * (endValue - startValue);
};
export const progressForValueInRange = (value, startValue, endValue) => {
  return (value - startValue) / (endValue - startValue);
};

export const transitionForProgressInSteps = (progress, steps) => {
  // FIXME: clean up to ES6
  var transition = -1;
  var normalizedProgress;

  // Bail if there's fewer than two steps
  if (steps.length < 2) {
    return transition;
  }

  // If the progress is before the beginning of the range, extrapolate from the first and second steps.
  if (progress < 0) {
    transition = transitionForProgressInRange(progress, steps[0], steps[1]);
  }

  // If the progress is after the end of the range, extrapolate from the second last and last steps.
  else if (progress > steps.length - 1) {
    normalizedProgress = progressForValueInRange(
      progress,
      Math.floor(progress),
      Math.floor(progress) + 1
    );
    normalizedProgress = normalizedProgress + 1;
    transition = transitionForProgressInRange(
      normalizedProgress,
      steps[steps.length - 2],
      steps[steps.length - 1]
    );
  }

  // Supress potential NaNs
  else if (progress == steps.length - 1 || progress == 0) {
    transition = steps[progress];
  }

  // Otherwise interpolate between steps
  else {
    normalizedProgress = progressForValueInRange(
      progress,
      Math.floor(progress),
      Math.floor(progress) + 1
    );
    transition = transitionForProgressInRange(
      normalizedProgress,
      steps[Math.floor(progress)],
      steps[Math.floor(progress) + 1]
    );
  }

  return transition;
};

export const modulate = (value, rangeA, rangeB, limit = false) => {
  const [fromLow, fromHigh] = rangeA;
  const [toLow, toHigh] = rangeB;
  const result =
    toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);

  if (limit === true) {
    if (toLow < toHigh) {
      if (result < toLow) {
        return toLow;
      }
      if (result > toHigh) {
        return toHigh;
      }
    } else {
      if (result > toLow) {
        return toLow;
      }
      if (result < toHigh) {
        return toHigh;
      }
    }
  }

  return result;
};

export const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const objRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    observer.observe(objRef);

    return () => {
      observer.unobserve(objRef);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
};

export function onImagesLoaded(images) {
  return new Promise((resolve) => {
    if (!images.length) {
      resolve();

      return;
    }

    let loadedCount = 0;

    function onComplete() {
      ++loadedCount;

      if (loadedCount === images.length) {
        resolve();
      }

      this.removeEventListener("load", onComplete);
      this.removeEventListener("error", onComplete);
    }

    images.forEach((img) => {
      if (img.complete) {
        onComplete.call(img);
      } else {
        img.addEventListener("load", onComplete);
        img.addEventListener("error", onComplete);
      }
    });
  });
}

export const onVideoLoaded = (video, callback, stage = 2) => {
  if (video.readyState >= stage) {
    callback();

    return;
  }

  function onVideoLoaded(e) {
    if (video.readyState >= stage) {
      video.removeEventListener("loadeddata", onVideoLoaded);

      callback();
    }
  }

  video.addEventListener("loadeddata", onVideoLoaded);
};

/**
 * From https://stackoverflow.com/a/44779316
 *
 * @param {Function} fn Callback function
 * @param {Boolean|undefined} [throttle] Optionally throttle callback
 * @return {Function} Bound function
 *
 * @example
 * //generate rAFed function
 * jQuery.fn.addClassRaf = bindRaf(jQuery.fn.addClass);
 *
 * //use rAFed function
 * $('div').addClassRaf('is-stuck');
 */
export function bindRaf(fn, throttle) {
  var isRunning;
  var that;
  var args;

  var run = function () {
    isRunning = false;
    fn.apply(that, args);
  };

  return function () {
    that = this;
    args = arguments;

    if (isRunning && throttle) {
      return;
    }

    isRunning = true;
    requestAnimationFrame(run);
  };
}
