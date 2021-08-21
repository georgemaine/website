/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const ImageTileContainer = ({ children }) => {
  const figureRef = useRef();
  const [translateY, setTranslateY] = useState(false);

  const calcTranslateY = (ratio, total) => {
    return `translateY(calc(-${ratio} * ${total})`;
  };

  const buildThresholdList = () => {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  };

  useEffect(() => {
    console.log("buildThresholdList:", buildThresholdList());
    const node = figureRef.current;
    const callbackFunction = (entries) => {
      const [entry] = entries;
      entry.isIntersecting &&
        setTranslateY(calcTranslateY(entry.intersectionRatio, "9vh"));
    };
    const options = {
      // rootMargin: "-25% 0px 0px 0px",
      threshold: buildThresholdList(),
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    node && observer.observe(node);

    return () => {
      node && observer.unobserve(node);
    };
  }, [figureRef]);

  return (
    <figure
      ref={figureRef}
      style={{
        transform: translateY,
      }}
    >
      {children}
      <style jsx>
        {`
          figure {
            width: 100%;
            padding: 0;
            margin: 0 0 7vh;
            border: 0.5px solid var(--border);
            border-radius: 10px;
            overflow: hidden;
            position: relative;
          }

          @media only screen and (min-width: 737px) {
            figure {
              width: max-content;
              height: calc(100vh - 14vw);
              margin: 0 9vh 0 0;
              flex-shrink: 0;
            }
          }
        `}
      </style>
    </figure>
  );
};

const ImageTileCaption = ({ caption }) => {
  return (
    <figcaption>
      {caption}
      <style jsx>{`
        figcaption {
          position: absolute;
          padding: 18px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-size: 2.6rem;
          line-height: 1.23;
          font-weight: 700;
          border-radius: 10px;
          background-color: var(--dark-border);
          color: var(--white);
          opacity: 0;
          display: flex;
          align-items: flex-end;
          transition: opacity 150ms ease-out;
        }

        figcaption:hover {
          opacity: 1;
        }
      `}</style>
    </figcaption>
  );
};

const Image = ({ src, alt }) => {
  return (
    <>
      <img src={`/images/${src}`} alt={alt} />

      <style jsx>{`
        img {
          display: block;
          width: 100%;
        }

        @media only screen and (min-width: 737px) {
          img {
            width: auto;
            height: calc(100vh - 100px);
          }
        }
      `}</style>
    </>
  );
};

export default function ImageTile({ alt, caption, src }) {
  return (
    <ImageTileContainer>
      <Image src={src} alt={alt} />
      <ImageTileCaption caption={caption} />
    </ImageTileContainer>
  );
}
