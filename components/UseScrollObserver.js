// IntersectionObserver logic based on useOnScreen: https://usehooks.com/useOnScreen/

import { useState, useEffect } from "react";

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const useScrollObserver = (
  ref,
  rootMargin = "0px",
  withPercentage = false,
  percentageOffset = 0
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handlePercentage = () => {
    if (!window || !ref.current) return;

    const bounds = ref.current.getBoundingClientRect();
    const viewport = window.innerHeight;

    setPercentage(
      1 -
        clamp(
          (bounds.bottom - percentageOffset) /
            (viewport + bounds.height - percentageOffset * 2)
        )
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (withPercentage && isIntersecting && window) {
      window.addEventListener("scroll", handlePercentage, { passive: true });
      window.addEventListener("resize", handlePercentage);
      handlePercentage();

      return () => {
        window.removeEventListener("scroll", handlePercentage);
        window.removeEventListener("resize", handlePercentage);
      };
    }
  }, [withPercentage, isIntersecting]);

  return [isIntersecting, withPercentage ? percentage : null];
};

export default useScrollObserver;
