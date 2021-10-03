import { useEffect, useRef, useState } from "react";
import { modulate, useOnScreen } from "./utils";

export const TextWithTransition = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [y, setY] = useState(5);
  const [opacity, setOpacity] = useState(0);
  const textRef = useRef(null);
  const onScreen = useOnScreen(textRef, "-50% 0px 0px 0px");

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const textPosition = textRef.current.getBoundingClientRect().top;
    setScreenHeight(windowHeight);
    setHeight(textPosition);
  }, []);

  useEffect(() => {
    const scrollerRef = document.querySelector(".scroll-container");

    const scrollerHandler = () => {
      const value = scrollerRef.scrollTop;
      const startValue = Math.floor(height - screenHeight * 0.85);
      const endValue = Math.floor(height - screenHeight * 0.7);
      const yProgress = modulate(value, [startValue, endValue], [50, 0], true);
      // if (onScreen) {
      // const opacityProgress = modulate(
      //   value,
      //   [startValue, endValue],
      //   [0, 1],
      //   true
      // );
      console.log("hello");
      // setY(yProgress);
      // setOpacity(opacityProgress);
      // }
    };

    // scrollerRef.addEventListener("touchmove", scrollerHandler);
    // scrollerRef.addEventListener("scroll", scrollerHandler);
    // scrollerHandler();

    // return () => {
    //   scrollerRef.removeEventListener("touchmove", scrollerHandler);
    //   scrollerRef.removeEventListener("scroll", scrollerHandler);
    // };
  }, [height, onScreen, screenHeight]);
  return (
    <p
      ref={textRef}
      style={{ transform: `translate3d(0, ${y / 10}rem, 0)`, opacity: opacity }}
    >
      {children}
      <style jsx>{`
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 5vh 0;
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

export const TitleTile = ({ children }) => {
  return (
    <h1>
      {children}
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
    <p>
      {children}
      <style jsx>{`
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: ${margin};
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
