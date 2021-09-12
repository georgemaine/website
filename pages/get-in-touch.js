import { useEffect } from "react";
import GlobalNav from "../components/GlobalNav";
import { StickyMediaTile } from "../components/StickyMediaTile";
import { TextTile, InlineLink } from "../components/TextTile";

export default function GetInTouch() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(".anim-text-animate")
    );

    const thresholds = (steps) =>
      Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0);

    let previousY = 0;
    let previousRatio = 0;

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;
          const currentRatio = entry.intersectionRatio;
          const currentY = entry.boundingClientRect.y;

          if (isIntersecting && currentRatio > 0.5) {
            entry.target.classList.add("animated-text-element");
          }

          // Scrolling down/up
          if (currentY < previousY) {
            if (currentRatio > previousRatio && isIntersecting) {
              console.log("Scrolling down enter");
            } else {
              console.log("Scrolling down leave");
            }
          } else if (currentY > previousY && isIntersecting) {
            if (currentRatio < previousRatio && currentRatio < 0.45) {
              console.log("currentRatio:", currentRatio);
              entry.target.classList.remove("animated-text-element");
              console.log("Scrolling up leave");
            } else {
              console.log("Scrolling up enter");
            }
          }

          previousY = currentY;
          previousRatio = currentRatio;
        });
      },
      { threshold: thresholds(10) }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <main>
      <GlobalNav />
      <StickyMediaTile
        src={"georgemaine.jpg"}
        alt={"Georgemaine Lourens"}
        margin={"0 0 9.5rem"}
      />
      <TextTile>Hello, world — I love tinkering with software.</TextTile>
      <TextTile>
        Ever since I was a young kid, I was fascinated with how things worked.
      </TextTile>
      <TextTile>
        Can I remake it differently? Would people prefer that better?
      </TextTile>
      <TextTile>
        The part I hated was showing my version to people — Go figure.
      </TextTile>
      <TextTile>
        Currently, I’m a product designer at Pitch. I work together with
        incredible people who made me a better person and taught me so much.
      </TextTile>
      <TextTile>
        And, I still love learning from people their stories. So if you love
        that too, reach out via{" "}
        <InlineLink
          href={
            "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B"
          }
          text={"Email"}
        />
        ,
        <InlineLink href={"https://twitter.com/georgemaine"} text={"Twitter"} />
        , or{" "}
        <InlineLink
          href={"https://www.linkedin.com/in/georgemaine"}
          text={"LinkedIn"}
        />
      </TextTile>
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: calc(3.5vw + 4.8rem) 0
            calc(20rem + env(safe-area-inset-bottom));
          max-width: 168.8rem;
        }
      `}</style>
    </main>
  );
}
