export default function TextTile({ text }) {
  return (
    <p>
      {text}
      <style jsx>
        {`
          p {
            line-height: 1.08;
            font-weight: 700;
            margin-bottom: 30px;
          }

          @media (max-width: 540px) {
            p {
              font-size: calc(28px + 28 * (100vw - 375px) / 375);
            }
          }

          @media (min-width: 737px) {
            p {
              font-size: calc(42px + 42 * (100vw - 1100px) / 1100);
              margin: 0 90px 0 0;
              flex-shrink: 0;
              max-width: 79vw;
            }
          }

          @media (min-width: 1680px) {
            p {
              font-size: calc(80px + 80 * (100vw - 1680px) / 1680);
            }
          }
        `}
      </style>
    </p>
  );
}
