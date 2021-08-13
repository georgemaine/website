export default function TextTile({ text }) {
  return (
    <p>
      {text}
      <style jsx>
        {`
          p {
            font-size: 2.8rem;
            line-height: 1.08;
            letter-spacing: -0.08rem;
            font-weight: 700;
            margin-bottom: 18vh;
          }

          @media (max-width: 540px) {
            p {
              font-size: calc(28px + 28 * (100vw - 375px) / 375);
            }
          }

          @media (min-width: 737px) {
            p {
              font-size: calc(42px + 42 * (100vw - 740px) / 740);
              margin: 0 18vw 0 0;
              flex-shrink: 0;
              max-width: 79vw;
            }
          }

          @media (min-width: 1260px) {
            p {
              font-size: calc(80px + 80 * (100vw - 1400px) / 1400);
              letter-spacing: -0.015em;
              line-height: 1.05;
            }
          }

          @media screen and (min-width: 1770px) {
            p {
              font-size: 118px;
              letter-spacing: -0.015em;
              line-height: 1.05;
            }
          }
        `}
      </style>
    </p>
  );
}
