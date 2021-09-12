import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

export const StaticTextTile = ({ children, margin = "18vh 0 12vh" }) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: ${margin};
          transition: opacity 0.6s linear,
            transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
        }

        @media (max-width: 54rem) {
          p {
            font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          }
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
            margin: calc(5.6rem + 56 * (100vw - 140rem) / 1400) 0 10vh;
          }
        }

        @media (min-width: 126rem) {
          p {
            font-size: calc(5.6rem + 56 * (100vw - 140rem) / 1400);
            letter-spacing: -0.015rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </p>
  );
};

export const TitleTile = ({ title }) => {
  const titleRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = titleRef.current;

    const thresholdArray = (steps) =>
      Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0);

    let previousY = 0;
    let previousRatio = 0;

    const callbackFunction = (entries) => {
      const [entry] = entries;
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;

      isIntersecting && setIsVisible(true);

      // Scrolling down/up
      if (currentY < previousY) {
        if (currentRatio > previousRatio && isIntersecting) {
          setIsVisible(true);
        } else {
          console.log("Scrolling down leave");
        }
      } else if (currentY > previousY && isIntersecting) {
        if (currentRatio < previousRatio) {
          setIsVisible(false);
          //FIXME: Remove
          console.log("Scrolling up leave");
        } else {
          console.log("Scrolling up enter");
        }
      }

      previousY = currentY;
      previousRatio = currentRatio;
    };

    const observer = new IntersectionObserver(debounce(callbackFunction, 160), {
      threshold: thresholdArray(2),
    });
    node && observer.observe(node);

    return () => {
      node && observer.unobserve(node);
    };
  }, [titleRef]);

  return (
    <h1
      ref={titleRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12rem)",
      }}
    >
      {title}
      <style jsx>{`
        h1 {
          font-size: 4.2rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 18vh 0;
          transition: opacity 0.6s linear,
            transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
        }
        @media (max-width: 54rem) {
          h1 {
            font-size: calc(4.2rem + 42 * (100vw - 37.5rem) / 375);
          }
        }
        @media (min-width: 73.7rem) {
          h1 {
            font-size: calc(5.6rem + 56 * (100vw - 74rem) / 740);
            flex-shrink: 0;
            margin: 20rem 0;
          }
        }
        @media screen and (min-width: 177rem) {
          h1 {
            font-size: 18rem;
          }
        }
      `}</style>
    </h1>
  );
};

export const TextTile = ({ margin = "6vh 0 0", children }) => {
  return (
    <p className={"anim-text-animate"}>
      {children}
      <style jsx>{`
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: ${margin};
        }
        .anim-text-animate {
          opacity: 0;
          transform: translateY(12rem);
          transition: opacity 0.6s linear,
            transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
        }
        .animated-text-element {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 54rem) {
          p {
            font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          }
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
            margin: calc(5.6rem + 56 * (100vw - 140rem) / 1400) 0 0;
          }
        }

        @media (min-width: 126rem) {
          p {
            font-size: calc(5.6rem + 56 * (100vw - 140rem) / 1400);
            letter-spacing: -0.015rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </p>
  );
};

export const InlineLink = ({ href, text }) => {
  return (
    <a href={href} target='blank'>
      {text}
      <style jsx>{`
        a {
          white-space: nowrap;
          color: #07a7f1;
        }
        a:hover {
          transition: 0.2s ease-out;
        }

        a::after {
          display: inline-block;
          content: " ↗";
          position: relative;
          top: 0.03rem;
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }

        a:hover::after {
          transform: translate3d(0.3rem, -0.3rem, 0);
        }
      `}</style>
    </a>
  );
};
