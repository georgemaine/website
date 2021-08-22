/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { createRef, useEffect, useState } from "react";
import Plx from "react-plx";

const MediaWrapper = ({ children, width = "100%" }) => {
  return (
    <figure>
      {children}
      <style jsx>{`
        figure {
          width: 94vw;
          padding: 0;
          margin: 0 0 12vh;
          will-change: transform;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        @media (max-width: 736px) {
          left: 50%;
          transform: translateX(-50%);
        }

        @media (min-width: 737px) {
          figure {
            width: ${width};
          }
        }
      `}</style>
    </figure>
  );
};

const Image = ({ src, alt }) => {
  const ref = createRef();
  const [mediaHeight, setMediaHeight] = useState();

  useEffect(() => {
    setMediaHeight(ref.current.clientHeight);
  }, [mediaHeight, ref]);

  const MediaTileTransition = [
    {
      start: "self",
      duration: "50vh",
      easing: "easeOutQuad",
      properties: [
        {
          startValue: -mediaHeight * 0.3,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
    {
      start: "self",
      startOffset: "-5vh",
      endOffset: "25vh",
      duration: "50vh",
      easing: "easeOutQuad",
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  const PlxWrapper = ({ children }) => (
    <Plx parallaxData={MediaTileTransition} animateWhenNotInViewport>
      {children}
    </Plx>
  );

  return (
    <PlxWrapper>
      <img ref={ref} src={`/media/${src}`} alt={alt} />
      <style jsx>{`
        img {
          display: block;
          width: 100%;
        }
      `}</style>
    </PlxWrapper>
  );
};

const MediaCaption = ({ caption }) => {
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
          transition: opacity 0.2s ease-out;
        }

        figcaption:hover {
          opacity: 1;
        }
      `}</style>
    </figcaption>
  );
};

export const MediaTile = ({ alt, src, width }) => {
  return (
    <MediaWrapper alt={alt} width={width}>
      <Image src={src} alt={alt} />
      <MediaCaption caption={alt} />
    </MediaWrapper>
  );
};

export const StaticMediaTile = ({ alt, src, width }) => {
  return (
    <MediaWrapper alt={alt} width={width}>
      <img src={`/media/${src}`} alt={alt} />
      <MediaCaption caption={alt} />
      <style jsx>{`
        img {
          display: block;
          width: 100%;
        }
      `}</style>
    </MediaWrapper>
  );
};
