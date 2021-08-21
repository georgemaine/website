/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import Plx from "react-plx";

export const VideoTile = ({ src }) => {
  const ImageTileTransition = [
    {
      start: "self",
      duration: "150vh",
      easing: "easeIn",
      properties: [{ startValue: 24, endValue: -24, property: "translateY" }],
    },
  ];
  return (
    <Plx parallaxData={ImageTileTransition} animateWhenNotInViewport>
      <video
        src={`/media/${src}`}
        poster={`/media/${src}`}
        playsInline
        autoPlay
        muted
        loop
        preload='auto'
      >
        <style jsx>{`
          video {
            width: 100%;
            padding: 0;
            margin: 0 0 12vh;
            border: 0.5px solid var(--border);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
          }

          @media (min-width: 737px) {
            video {
              width: 50%;
            }
          }
        `}</style>
      </video>
    </Plx>
  );
};

const ImageTileContainer = ({ children }) => {
  const ImageTileTransition = [
    {
      start: "self",
      duration: "150vh",
      easing: "easeIn",
      properties: [{ startValue: 24, endValue: -24, property: "translateY" }],
    },
  ];
  return (
    <Plx parallaxData={ImageTileTransition} animateWhenNotInViewport>
      <figure>
        {children}
        <style jsx>{`
          figure {
            width: 100%;
            padding: 0;
            margin: 0 0 12vh;
            border: 0.5px solid var(--border);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
          }
        `}</style>
      </figure>
    </Plx>
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

export const ImageTile = ({ alt, caption, src }) => {
  return (
    <ImageTileContainer alt={alt}>
      <Image src={src} alt={alt} />
      <ImageTileCaption caption={caption} />
    </ImageTileContainer>
  );
};
