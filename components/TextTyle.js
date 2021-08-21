import { useEffect, useRef, useState } from "react";
export const TitleTile = ({ title }) => {
  const titleRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      threshold: 0.72,
    };
    const node = titleRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);
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
      }}
    >
      {title}
      <style jsx>
        {`
          h1 {
            font-size: 4.2rem;
            line-height: 1.08;
            letter-spacing: -0.08rem;
            font-weight: 700;
            margin-bottom: 12vh;
            transition: opacity 0.4s ease-out;
          }

          @media (max-width: 540px) {
            h1 {
              font-size: calc(42px + 42 * (100vw - 375px) / 375);
            }
          }

          @media (min-width: 737px) {
            h1 {
              font-size: calc(80px + 80 * (100vw - 740px) / 740);
              margin: 0 18vw 0 0;
              flex-shrink: 0;
              max-width: 79vw;
            }
          }

          @media (min-width: 1260px) {
            h1 {
              font-size: 118px;
              letter-spacing: -0.015em;
              line-height: 1.05;
            }
          }
          @media screen and (min-width: 1770px) {
            h1 {
              font-size: 180px;
            }
          }
        `}
      </style>
    </h1>
  );
};

export const TextTile = ({ margin = "0 0 9vh", children }) => {
  const textRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const node = textRef.current;
    const options = {
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(callbackFunction, options);
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
      }}
    >
      {children}
      <style jsx>
        {`
          p {
            font-size: 2.8rem;
            line-height: 1.08;
            letter-spacing: -0.08rem;
            font-weight: 700;
            margin: ${margin};
            transition: opacity 0.4s ease-out;
          }

          @media (max-width: 540px) {
            p {
              font-size: calc(28px + 28 * (100vw - 375px) / 375);
            }
          }

          @media (min-width: 737px) {
            p {
              font-size: calc(42px + 42 * (100vw - 740px) / 740);
              margin: 0 18vw 0 0;
              flex-shrink: 0;
              max-width: 79vw;
            }
          }

          @media (min-width: 1260px) {
            p {
              font-size: calc(80px + 80 * (100vw - 1400px) / 1400);
              letter-spacing: -0.015em;
              line-height: 1.05;
            }
          }

          @media screen and (min-width: 1770px) {
            p {
              font-size: 118px;
              letter-spacing: -0.015em;
              line-height: 1.05;
            }
          }
        `}
      </style>
    </p>
  );
};

export const InlineLink = ({ href, text }) => {
  return (
    <a href={href} target='blank'>
      {text}
      <style jsx>
        {`
          a:hover {
            color: rgba(208, 208, 208);
            transition: 0.2s ease-out;
          }

          a::after {
            display: inline-block;
            content: " →";
            position: relative;
            top: 0.03rem;
            transition: opacity 0.2s ease-out, transform 0.2s ease-out;
          }

          a:hover::after {
            transform: translate3d(0.3rem, 0, 0);
          }
        `}
      </style>
    </a>
  );
};