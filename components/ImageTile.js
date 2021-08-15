/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Plx from "react-plx";

const ImageTileContainer = ({ children, alt }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const ref = useRef(null);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const ImageTileTransition = [
    {
      start: "self",
      duration: "150vh",
      easing: "easeIn",
      properties: [
        {
          startValue: 24,
          endValue: -24,
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <Plx
      parallaxData={ImageTileTransition}
      animateWhenNotInViewport
      // onPlxStart={() =>
      //   console.log(`${alt}Plx started at y: ${scrollPosition}`)
      // }
      // onPlxEnd={() => console.log(`${alt}Plx ended at y: ${scrollPosition}`)}
    >
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
                height: calc(100vh - 12vw);
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
            height: calc(100vh - 12vw);
          }
        }
      `}</style>
    </>
  );
};

export default function ImageTile({ alt, caption, src }) {
  return (
    <ImageTileContainer alt={alt}>
      <Image src={src} alt={alt} />
      <ImageTileCaption caption={caption} />
    </ImageTileContainer>
  );
}
