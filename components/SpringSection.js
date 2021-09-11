import { useEffect, useRef, useState } from "react";
import ImageTile from "../components/ImageTile";
import { TextTile, TitleTile } from "./TextTyle";

export default function SpringSection({}) {
  const sectionRef = useRef();
  const [translateY, setTranslateY] = useState(0);
  const calcTranslateY = (translateY, total) => {
    return `translateY(calc(-${translateY} * ${total}))`;
  };
  const callbackFunction = (entries) => {
    const [entry] = entries;
    entry.isIntersecting &&
      setTranslateY(calcTranslateY(entry.intersectionRatio, "30vh"));
  };

  const options = {
    rootMargin: "44px 0 0",
    threshold: [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    sectionRef.current && observer.observe(sectionRef.current);
    console.log("This is translateY:", translateY);

    return () => {
      sectionRef.current && observer.unobserve(sectionRef.current);
    };
  }, [sectionRef, options]);

  return (
    <section ref={sectionRef}>
      <ImageTile
        src={"always-sunday.jpg"}
        alt={"Always Sunday, Playlist on Apple music."}
        caption={"Always Sunday, Playlist on Apple music. 2021."}
        transform={translateY}
      />
      <TextTile
        margin={"-9vh 0 27vh;"}
        text={
          "Always Sunday, a playlist from Apple music is my way of starting the weekend. It’s filled with calm background music with blues vibes in there — some vocals, some not."
        }
      />

      <ImageTile
        src={"apple-watch-march-challenge.jpeg"}
        alt={"Apple watch march challenge achievement"}
        caption={"Apple watch. March challenge achievement. 2021."}
        transform={translateY}
      />
      <ImageTile
        src={"hibiki.jpg"}
        alt={"Hibiki"}
        caption={"Hibiki Japanese harmony by Suntory Tori. 2021."}
        transform={translateY}
      />
      <TitleTile title={"Spring 2021."} />
    </section>
  );
}
