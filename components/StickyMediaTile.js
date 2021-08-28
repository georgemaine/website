/* eslint-disable @next/next/no-img-element */

import Plx from "react-plx";

const StickyMediaTileWrapper = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          margin: 0 0 18vh;
        }

        @media (min-width: 737px) {
          div {
            margin: 0 0 27vh;
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
          width: 96vw;
          padding: 0;
          will-change: transform;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          z-index: 1000;
          margin: 0;
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
          font-size: calc(28px + 28 * (100vw - 375px) / 375);
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          border-radius: 10px;
          color: var(--white);
          background-color: var(--dark-border);
          opacity: 0;
          display: flex;
          transition: opacity 0.2s ease-out;
        }

        figcaption:hover {
          opacity: 1;
        }

        @media (max-width: 540px) {
          figcaption {
            font-size: calc(28px + 28 * (100vw - 375px) / 375);
          }
        }

        @media (min-width: 737px) {
          figcaption {
            font-size: calc(42px + 42 * (100vw - 740px) / 740);
          }
        }

        @media (min-width: 1260px) {
          figcaption {
            font-size: calc(56px + 56 * (100vw - 1400px) / 1400);
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
          display: block;
          width: 100%;
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
      easing: "easeOutQuad",
      properties: [
        {
          startValue: -72,
          unit: "%",
          endValue: 0,
          property: "translateY",
        },
      ],
    },
    {
      start: "self",
      startOffset: "35px",
      duration: ".sticky-media-tile-text",
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

          @media (max-width: 540px) {
            p {
              font-size: calc(28px + 28 * (100vw - 375px) / 375);
              padding: calc(28px + 28 * (100vw - 375px) / 375) 0 0;
            }
          }

          @media (min-width: 737px) {
            p {
              font-size: calc(42px + 42 * (100vw - 740px) / 740);
              padding: calc(42px + 42 * (100vw - 740px) / 740) 0 0;
            }
          }

          @media (min-width: 1260px) {
            p {
              font-size: calc(56px + 56 * (100vw - 1400px) / 1400);
              letter-spacing: -0.015rem;
              line-height: 1.05;
              padding: calc(56px + 56 * (100vw - 1400px) / 1400) 0 0;
            }
          }
        `}</style>
      </p>
    </Plx>
  );
};

export const StickyMediaTile = ({ alt, children, src, width }) => {
  return (
    <StickyMediaTileWrapper>
      <StickyMediaWrapper width={width}>
        <StickyMediaImage src={src} alt={alt} />
        <StickyMediaCaption caption={alt} />
      </StickyMediaWrapper>
      {children}
    </StickyMediaTileWrapper>
  );
};
