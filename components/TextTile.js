import { useEffect, useRef, useState } from "react";

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

        @media (max-width: 540px) {
          p {
            font-size: calc(28px + 28 * (100vw - 375px) / 375);
          }
        }

        @media (min-width: 737px) {
          p {
            font-size: calc(42px + 42 * (100vw - 740px) / 740);
            margin: calc(56px + 56 * (100vw - 1400px) / 1400) 0 10vh;
          }
        }

        @media (min-width: 1260px) {
          p {
            font-size: calc(56px + 56 * (100vw - 1400px) / 1400);
            letter-spacing: -0.015em;
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

    const observer = new IntersectionObserver(callbackFunction, {
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
        transform: isVisible ? "translateY(0px)" : "translateY(120px)",
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

        @media (max-width: 540px) {
          h1 {
            font-size: calc(42px + 42 * (100vw - 375px) / 375);
          }
        }

        @media (min-width: 737px) {
          h1 {
            font-size: calc(56px + 56 * (100vw - 740px) / 740);
            flex-shrink: 0;
            margin: 200px 0;
          }
        }

        // @media (min-width: 1260px) {
        //   h1 {
        //     font-size: 118px;
        //     letter-spacing: -0.015em;
        //     line-height: 1.05;
        //   }
        // }
        @media screen and (min-width: 1770px) {
          h1 {
            font-size: 180px;
          }
        }
      `}</style>
    </h1>
  );
};

export const TextTile = ({ margin = "6vh 0", children }) => {
  const textRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = textRef.current;

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

    const observer = new IntersectionObserver(callbackFunction, {
      threshold: thresholdArray(2),
    });
    node && observer.observe(node);

    return () => {
      node && observer.unobserve(node);
    };
  }, [textRef]);

  return (
    <p
      ref={textRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(120px)",
      }}
    >
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

        @media (max-width: 540px) {
          p {
            font-size: calc(28px + 28 * (100vw - 375px) / 375);
          }
        }

        @media (min-width: 737px) {
          p {
            font-size: calc(42px + 42 * (100vw - 740px) / 740);
            margin: calc(56px + 56 * (100vw - 1400px) / 1400) 0 10vh;
          }
        }

        @media (min-width: 1260px) {
          p {
            font-size: calc(56px + 56 * (100vw - 1400px) / 1400);
            letter-spacing: -0.015em;
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
