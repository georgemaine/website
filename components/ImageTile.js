/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const ImageTileContainer = ({ children, transform }) => {
  // const figureRef = useRef();
  // const [ratio, setRatio] = useState(false);

  // const setTranslateY = (ratio, total) => {
  //   return `translateY(calc(-${ratio} * ${total})`;
  // };

  // const callbackFunction = (entries) => {
  //   const [entry] = entries;
  //   entry.isIntersecting &&
  //     setRatio(setTranslateY(entry.intersectionRatio, "9vh"));
  // };

  // const options = {
  //   rootMargin: "-25% 0px 0px 0px",
  //   threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   figureRef.current && observer.observe(figureRef.current);

  //   return () => {
  //     figureRef.current && observer.unobserve(figureRef.current);
  //   };
  // }, [figureRef, options]);

  return (
    <figure
      // ref={figureRef}
      style={{
        transform: transform,
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
            transition: transform 0.1s ease-out;
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

export default function ImageTile({ alt, caption, src, transform }) {
  return (
    <ImageTileContainer transform={transform}>
      <Image src={src} alt={alt} />
      <ImageTileCaption caption={caption} />
    </ImageTileContainer>
  );
}
