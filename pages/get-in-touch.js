import GlobalNav from "../components/GlobalNav";
import { StickyMediaTile } from "../components/StickyMediaTile";
import { TextTile, InlineLink } from "../components/TextTile";

export default function GetInTouch() {
  return (
    <main>
      <GlobalNav />
      <StickyMediaTile
        src={"georgemaine.jpeg"}
        alt={"Georgemaine Lourens"}
        margin={"0 0 9.5rem"}
      />
      <TextTile>
        As you may or may not be aware, I’ve always been fascinated with how
        things work.
      </TextTile>
      <TextTile>
        Could I remake it differently? Would people prefer that?
      </TextTile>
      <TextTile>
        The part I hated was showing my version to people — Go figure.
      </TextTile>
      <TextTile>
        Currently, I’m an indoor gardener and product designer at{" "}
        <InlineLink href={"https://pitch.io"} text={"Pitch"} />
      </TextTile>
      <TextTile>
        I love surrounding myself with extraordinary people and plants — they
        teach me so much and make me a better person.
      </TextTile>
      <TextTile>
        If you love that too, reach out via{" "}
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
          padding: calc(3.5vw + 4.8rem) 0 18vh;
          max-width: 168.8rem;
        }
      `}</style>
    </main>
  );
}
