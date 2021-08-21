/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { createRef, useEffect, useState } from "react";
import Plx from "react-plx";

export const VideoTile = ({ src }) => {
  const ref = createRef();
  const [height, setHeight] = useState();

  const ImageTileTransition = [
    {
      start: "self",
      duration: "72vh",
      easing: "easeIn",
      properties: [{ startValue: 1.15, endValue: 1, property: "scale" }],
    },
    {
      start: "self",
      duration: height * 0.42,
      easing: "easeIn",
      properties: [{ startValue: 0, endValue: 1, property: "opacity" }],
    },
  ];

  useEffect(() => {
    const videoHeight = ref.current.clientHeight;
    setHeight(videoHeight);
  }, [ref]);
  return (
    <div ref={ref}>
      <Plx parallaxData={ImageTileTransition} animateWhenNotInViewport>
        <video
          src={`/media/${src}`}
          poster={`/media/${src}`}
          playsInline
          autoPlay
          muted
          loop
          preload='auto'
        ></video>
      </Plx>
      <style jsx>{`
        div {
          margin: 0 0 12vh;
          border-radius: 10px;
          border: 0.5px solid var(--dark-border);
          overflow: hidden;
          will-change: transform;
          width: 100%;
        }

        video {
          width: 100%;
          display: block;
          vertical-align: middle;
        }

        @media (min-width: 737px) {
          div {
            width: 50%;
          }
        }
      `}</style>
    </div>
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

const Image = ({ alt, children, src }) => {
  const ref = createRef();
  const [height, setHeight] = useState();
  const ImageTileTransition = [
    {
      start: "self",
      duration: "72vh",
      easing: "easeIn",
      properties: [{ startValue: 1.15, endValue: 1, property: "scale" }],
    },
    {
      start: "self",
      duration: height * 0.42,
      easing: "easeIn",
      properties: [{ startValue: 0, endValue: 1, property: "opacity" }],
    },
  ];

  useEffect(() => {
    const videoHeight = ref.current.clientHeight;
    setHeight(videoHeight);
  }, [ref]);

  return (
    <figure ref={ref}>
      {children}
      <Plx parallaxData={ImageTileTransition} animateWhenNotInViewport>
        <img src={`/media/${src}`} alt={alt} />
      </Plx>
      <style jsx>{`
        figure {
          width: 100%;
          padding: 0;
          margin: 0 0 12vh;
          border: 0.5px solid var(--dark-border);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          will-change: transform;
        }

        img {
          display: block;
          width: 100%;
        }
      `}</style>
    </figure>
  );
};

export const ImageTile = ({ alt, caption, src }) => {
  return (
    <Image src={src} alt={alt}>
      <ImageTileCaption caption={caption} />
    </Image>
  );
};
