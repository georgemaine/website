/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Plx from "react-plx";

const StickyMediaTileWrapper = ({ children, margin = "0 0 20rem" }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          margin: 0 0 4rem;
        }

        @media (min-width: 73.7rem) {
          div {
            margin: ${margin};
          }
        }
      `}</style>
    </div>
  );
};

const StickyMediaWrapper = ({ children, width = "100%" }) => {
  return (
    <figure>
      {children}
      <style jsx>{`
        figure {
          width: 100%;
          padding: 0;
          will-change: transform;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          z-index: 1000;
          margin: 0;
        }

        @media (min-width: 73.7rem) {
          figure {
            width: ${width};
          }
        }
      `}</style>
    </figure>
  );
};

const StickyMediaCaption = ({ caption }) => {
  return (
    <figcaption>
      {caption}
      <style jsx>{`
        figcaption {
          position: absolute;
          padding: 3vw;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          border-radius: 1rem;
          color: var(--white);
          background-color: var(--dark-border);
          opacity: 0;
          display: flex;
          transition: opacity 0.2s ease-out;
        }

        figcaption:hover {
          opacity: 1;
        }

        @media (max-width: 54rem) {
          figcaption {
            font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          }
        }

        @media (min-width: 73.7rem) {
          figcaption {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
          }
        }

        @media (min-width: 126rem) {
          figcaption {
            font-size: calc(5.6rem + 56 * (100vw - 140rem) / 1400);
            letter-spacing: -0.015rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </figcaption>
  );
};

const StickyMediaImage = ({ src, alt }) => {
  return (
    <>
      <img src={`/media/${src}`} alt={alt} />
      <style jsx>{`
        img {
          width: 100%;
          display: block;
        }
      `}</style>
    </>
  );
};

export const StickyMediaTileText = ({ children }) => {
  const StickyMediaTileTransition = [
    {
      start: "self",
      duration: ".sticky-media-tile-text",
      easing: "easeOutSin",
      endOffset: 270,
      properties: [
        {
          startValue: -200,
          endValue: 0,
          property: "translateY",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <Plx
      parallaxData={StickyMediaTileTransition}
      animateWhenNotInViewport
      style={{
        opacity: 0,
      }}
    >
      <p className='sticky-media-tile-text'>
        {children}
        <style jsx>{`
          p {
            font-size: 2.8rem;
            line-height: 1.08;
            letter-spacing: -0.08rem;
            font-weight: 700;
            margin: 0;
            padding: 2.8rem 0 0;
            transition: opacity 0.6s linear;
          }

          @media (max-width: 54rem) {
            p {
              font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
              padding: 6vh 0 0;
            }
          }

          @media (min-width: 73.7rem) {
            p {
              font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
              padding: 9.5rem 0 0;
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
    </Plx>
  );
};

export const StickyMediaTile = ({ alt, children, margin, src, width }) => {
  return (
    <StickyMediaTileWrapper margin={margin}>
      <StickyMediaWrapper width={width}>
        <StickyMediaImage src={src} alt={alt} />
        <StickyMediaCaption caption={alt} />
      </StickyMediaWrapper>
      {children}
    </StickyMediaTileWrapper>
  );
};
