import GlobalNav from "../components/GlobalNav";
import { StaticMediaTile } from "../components/MediaTile";
import { StaticTextTile, TextTile, InlineLink } from "../components/TextTile";

export default function GetInTouch() {
  return (
    <main>
      <GlobalNav />
      <StaticMediaTile
        src={"georgemaine.jpg"}
        alt={"Georgemaine"}
        style={{
          border: ".5px solid var(--dark-border)",
        }}
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
          padding: 48px 0 0;
          max-width: 168.8rem;
        }
      `}</style>
    </main>
  );
}
