/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */

import Plx from "react-plx";
import { InlineLink } from "../components/TextTile";

const MediaWrapper = ({ children, width = "100%", props }) => {
  return (
    <figure {...props}>
      {children}
      <style jsx>{`
        figure {
          width: 96vw;
          padding: 0;
          /* margin: 0 0 12vh; */
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

const Image = ({ src, alt }) => {
  const MediaTileTransition = [
    {
      start: "self",
      duration: "49vh",
      easing: "easeOutQuad",
      properties: [
        {
          startValue: -30,
          unit: "%",
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

  return (
    <Plx parallaxData={MediaTileTransition} animateWhenNotInViewport>
      <img src={`/media/${src}`} alt={alt} />
      <style jsx>{`
        img {
          display: block;
          width: 100%;
        }
      `}</style>
    </Plx>
  );
};

const MediaCaption = ({ caption }) => {
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

export const StaticMediaTile = ({ alt, src, width, props }) => {
  return (
    <MediaWrapper alt={alt} width={width} props={props}>
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

export const StickyMediaTile = ({ alt, margin, src, width }) => {
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
    <div
      style={{
        margin: "0 0 18vh",
      }}
    >
      <MediaWrapper alt={alt} width={width}>
        <img src={`/media/${src}`} alt={alt} />
      </MediaWrapper>
      <Plx
        parallaxData={StickyMediaTileTransition}
        animateWhenNotInViewport
        style={{
          opacity: 0,
        }}
      >
        <div className='sticky-media-tile-text'>
          <p>
            Meet Phyllanthus Mirabilis. During dusk, the leaves fold together in
            pairs like a butterfly — honestly, I can’t 😍.
          </p>
        </div>
      </Plx>
      <Plx
        parallaxData={StickyMediaTileTransition}
        animateWhenNotInViewport
        style={{
          opacity: 0,
        }}
      >
        <div className='sticky-media-tile-text'>
          <p>
            {" "}
            Purchased in a cute antique, gifts, and plants shop called
            <InlineLink
              href='https://www.instagram.com/avalonamsterdam/'
              text=' Avalonamsterdam'
            />
          </p>
        </div>
      </Plx>
      <style jsx>{`
        img {
          display: block;
          width: 100%;
        }
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 0;
          padding: ${margin};

          transition: opacity 0.6s linear;
        }

        @media (max-width: 540px) {
          p {
            font-size: calc(28px + 28 * (100vw - 375px) / 375);
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
            letter-spacing: -0.015em;
            line-height: 1.05;
            padding: calc(56px + 56 * (100vw - 1400px) / 1400) 0 0;
          }

          p: last;
        }
      `}</style>
    </div>
  );
};

export const StickyAlbumMediaTile = ({ margin }) => {
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
    <div
      style={{
        margin: "0 0 18vh",
      }}
    >
      <MediaWrapper alt={"King's Disease II by Nas"} width={"50%"}>
        <img src={"/media/nas.jpeg"} alt={"King's Disease II by Nas"} />
      </MediaWrapper>
      <Plx
        parallaxData={StickyMediaTileTransition}
        animateWhenNotInViewport
        style={{
          opacity: 0,
        }}
      >
        <div className='sticky-media-tile-text'>
          <p>
            The more I listen to Nas’s{" "}
            <InlineLink
              href={
                "https://music.apple.com/nl/album/kings-disease-ii/1578569385?l=en"
              }
              text={"new Album"}
            />{" "}
            the more I like it 🔥
          </p>
        </div>
      </Plx>
      <style jsx>{`
        img {
          display: block;
          width: 100%;
        }
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 0;
          padding: ${margin};

          transition: opacity 0.6s linear;
        }

        @media (max-width: 540px) {
          p {
            font-size: calc(28px + 28 * (100vw - 375px) / 375);
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
            letter-spacing: -0.015em;
            line-height: 1.05;
            padding: calc(56px + 56 * (100vw - 1400px) / 1400) 0 0;
          }
        }
      `}</style>
    </div>
  );
};
