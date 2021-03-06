import GlobalNav from "../components/GlobalNav";
import { StickyMediaTile } from "../components/StickyMediaTile";
import { TextTile, InlineLink } from "../components/TextTile";

export default function GetInTouch() {
  return (
    <main>
      <GlobalNav />
      <StickyMediaTile
        src={"georgemaine.jpg"}
        alt={"Georgemaine Lourens"}
        margin={"0 0 9.5rem"}
      />
      <TextTile>Hello, world ā I love tinkering with software.</TextTile>
      <TextTile>
        Ever since I was a young kid, I was fascinated with how things worked.
      </TextTile>
      <TextTile>
        Can I remake it differently? Would people prefer that better?
      </TextTile>
      <TextTile>
        The part I hated was showing my version to people ā Go figure.
      </TextTile>
      <TextTile>
        Currently, Iām a product designer at Pitch. I work together with
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
