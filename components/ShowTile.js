import { useEffect, useRef } from "react";

export const Poster = ({
  src = "show1.jpg",
  style,
  opacity = 0,
  caption,
  description,
  index,
}) => {
  const url = `url(/media/${src})`;

  return (
    <figure style={style} className='movie'>
      <figcaption className='caption'>
        <strong>{caption}</strong>
        <br />
        {description}
      </figcaption>
      <style jsx>{`
        figure {
          position: absolute;
          margin: auto;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-image: ${url};
          background-size: cover;
          background-repeat: no-repeat;
          width: 225px;
          height: 300px;
          border-radius: 1.8rem;
          padding: 0;
          box-shadow: ${index === 0
            ? "10px 10px 20px 0px var(--dark-border),-10px 0 20px 0px var(--dark-border)"
            : null};
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: grab;
        }

        figure:active {
          cursor: grabbing;
        }

        figcaption {
          margin-bottom: -57px;
          text-align: center;
          opacity: ${index === 0 ? 1 : 0};
          color: #acacac;
        }

        strong {
          font-size: 1.7rem;
          line-height: 1.35;
          color: var(--text-dark);
        }

        figure:after {
          content: "";
          display: block;
          position: absolute;
          background-color: var(--black);
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          border-radius: 1.8rem;
          opacity: ${opacity};
          user-select: none;
        }
      `}</style>
    </figure>
  );
};
