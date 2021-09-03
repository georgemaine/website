import GlobalNav from "../components/GlobalNav";
import { StickyMediaTile } from "../components/StickyMediaTile";
import { InlineLink, TextTile, TitleTile } from "../components/TextTile";

export default function Components() {
  return (
    <>
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: 30,
          paddingLeft: "7vw",
          paddingRight: "7vw",
          paddingTop: "12vw",
        }}
      >
        <p
          style={{
            color: "var(--grey)",
            fontSize: 21,
            lineHeight: "2.3rem",
            marginBottom: 12,
          }}
        >
          Text styles
        </p>
        <TitleTile title={"Title"} />
        <TextTile>Text</TextTile>
        <TextTile>
          <InlineLink
            href={
              "https://music.apple.com/nl/playlist/always-sunday/pl.401b996cbcda4861ae8da67b8cd3ff32?l=en"
            }
            text={"Inline Link"}
          />
        </TextTile>
      </main>
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: 30,
          paddingLeft: "7vw",
          paddingRight: "7vw",
          overflowX: "scroll",
        }}
      >
        <p
          style={{
            color: "var(--grey)",
            fontSize: 21,
            lineHeight: "2.3rem",
            marginBottom: 12,
          }}
        >
          Interactive elements
        </p>

        {/* <StickyMediaTile
          src={"apple-watch-march-challenge.jpeg"}
          alt={"Completed Apple's March Challenge"}
        /> */}
      </main>

      <GlobalNav />
    </>
  );
}
