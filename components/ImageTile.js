/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const ImageTileContainer = ({ alt, children, src }) => {
  const figureRef = useRef();
  const [scale, setScale] = useState(1.15);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const node = figureRef.current;
    const threshholdList = [...Array(75).keys()].map((x) => x / 100);

    let previousY = 0;
    let previousRatio = 0;

    const callbackFunction = (entries) => {
      const [entry] = entries;
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;

      // Scrolling down/up
      if (currentY < previousY) {
        if (currentRatio > previousRatio && isIntersecting) {
          setOpacity((1 / 0.75) * entry.intersectionRatio * 2);
          setScale(1.15 - (0.15 / 0.75) * entry.intersectionRatio);
        }
      } else if (currentY > previousY && isIntersecting) {
        if (currentRatio < previousRatio) {
          setOpacity((1 / 0.75) * entry.intersectionRatio * 2);
          setScale(1.15 - (0.15 / 0.75) * entry.intersectionRatio);
        }
      }

      previousY = currentY;
      previousRatio = currentRatio;
    };

    const options = {
      threshold: threshholdList,
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    node && observer.observe(node);

    return () => {
      node && observer.unobserve(node);
    };
  }, [figureRef, scale]);

  return (
    <figure ref={figureRef}>
      {children}
      <img
        src={`/images/${src}`}
        alt={alt}
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      />

      <style jsx>{`
        figure {
          width: 100%;
          padding: 0;
          margin: 0 0 7vh;
          border: 0.5px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          transition: transform ease-in;
        }

        img {
          display: block;
          width: 100%;
        }
      `}</style>
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

export default function ImageTile({ alt, caption, src }) {
  return (
    <ImageTileContainer alt={alt} src={src}>
      <ImageTileCaption caption={caption} />
    </ImageTileContainer>
  );
}
