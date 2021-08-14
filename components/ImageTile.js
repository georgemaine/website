/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import Plx from "react-plx";

const ImageTileTransition = [
  {
    start: "self",
    duration: "100vh",
    easing: "easeIn",
    properties: [
      {
        startValue: 0,
        endValue: -54,
        property: "translateY",
      },
    ],
  },
];

const ImageTileContainer = ({ children }) => {
  return (
    <Plx parallaxData={ImageTileTransition} animateWhenNotInViewport>
      <figure>
        {children}
        <style jsx>
          {`
            figure {
              width: 100%;
              padding: 0;
              margin: 0 0 9vh;
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
