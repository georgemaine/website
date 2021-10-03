import { useEffect, useState } from "react";

const ScrollTrack = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ref = document.querySelector(".scroll-container");
    const handleScroll = () => {
      const scrollPosition = ref.scrollTop;
      const height = ref.scrollHeight - ref.clientHeight;
      const scrolled = scrollPosition / height;

      setProgress(scrolled);
    };

    ref.addEventListener("touchmove", handleScroll);
    ref.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      ref.removeEventListener("touchmove", handleScroll);
      ref.removeEventListener("scroll", handleScroll);
    };
  }, [progress]);

  return (
    <div style={{ transform: `translate3d(0, ${progress * 4.8}rem, 0)` }}>
      <style jsx>{`
        div {
          height: 1.2rem;
          width: 0.4rem;
          background: var(--black);
          border-radius: 0.4rem;
          position: absolute;
        }

        @media (prefers-color-scheme: dark) {
          div {
            background: var(--white);
          }
        }
      `}</style>
    </div>
  );
};

export const ScrollBar = ({ scrollContainer }) => {
  return (
    <div>
      <ScrollTrack scrollContainer={scrollContainer} />
      <style jsx>{`
        div {
          width: 0.4rem;
          border-radius: 0.4rem;
          background: var(--dark-border);
          height: 6rem;
          right: 1.2rem;
          position: fixed;
          top: calc(50vh - 6rem);
          overflow: hidden;
          z-index: 40;
          animation: reveal 0.7s ease-out 0.6s 1 normal both;
        }

        @media (prefers-color-scheme: dark) {
          div {
            background: var(--light-border);
          }
        }

        @keyframes reveal {
          0% {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
