import GlobalNav from "../components/GlobalNav";
import {
  StickyMediaTile,
  StickyMediaTileText,
} from "../components/StickyMediaTile";
import { InlineLink, TitleTile, TextTile } from "../components/TextTile";

export default function Outlet() {
  return (
    <main>
      <GlobalNav />
      <StickyMediaTile
        src={"hortus-1.jpeg"}
        alt={"Hortus Botanicus Amsterdam"}
        margin={"0 0 9.5rem"}
      />
      <StickyMediaTile
        src={"hortus-3.jpeg"}
        alt={"Hortus Botanicus Amsterdam"}
        width={"50%"}
        margin={"0 0 9.5rem"}
      />
      <StickyMediaTile
        src={"hortus-2.jpeg"}
        alt={"Hortus Botanicus Amsterdam"}
      />
      <StickyMediaTile src={"plant.jpeg"} alt={"Phyllanthus Mirabilis."}>
        <StickyMediaTileText>
          Meet Phyllanthus Mirabilis. During dusk, the leaves fold together in
          pairs like a butterfly — honestly, I can’t 😍. It’s from{" "}
          <InlineLink
            href='https://www.instagram.com/avalonamsterdam/'
            text=' Avalonamsterdam'
          />
          , a cute plants shop.
        </StickyMediaTileText>
      </StickyMediaTile>
      <StickyMediaTile
        src={"always-sunday.jpg"}
        alt={"Always Sunday by Music"}
        width={"50%"}
      >
        <StickyMediaTileText>
          Lately, most of my weekends start with playing{" "}
          <InlineLink
            href={
              "https://music.apple.com/nl/playlist/always-sunday/pl.401b996cbcda4861ae8da67b8cd3ff32?l=en"
            }
            text={"Always Sunday"}
          />{" "}
          in the background. Genuinely enjoying the lovely low-key vibes.
        </StickyMediaTileText>
      </StickyMediaTile>
      <StickyMediaTile src={"hibiki.jpg"} alt={"Hibiki by Suntory Toki"} />

      <TitleTile title={"Summer"} />
      <StickyMediaTile
        src={"apple-watch-march-challenge.jpeg"}
        alt={"Completed Apple's March Challenge"}
      />
      <TextTile>
        I love tinkering with things — it empowers me to explore my ideas.
        Sometimes I get so caught up in projects, and nothing else matters.
      </TextTile>
      <TextTile>
        And I’ll get so caught up in it that I don’t even realize what time it
        is. Haha.
      </TextTile>
      <TextTile>
        Inward discussions helped me realize why I could spend hours doing this,
        thinking it was only a couple of minutes.
      </TextTile>
      <TextTile>
        It’s just an expression of my emotion, energy, and talent — an outlet.
      </TextTile>
      <TextTile>
        So, I came up with this page — Outlet. It’s a real-time feed of those
        expressions, posted chronologically.
      </TextTile>
      <TextTile>
        Hopefully, one day this page will tell me a story of how I messed up
        while exploring my weird ideas and kept going . 🙈
      </TextTile>
      <TitleTile title={"Spring"} />
      <TitleTile title={"2021"} />
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: calc(3.5vw + 4.8rem) 0;
          max-width: 168.8rem;
        }
      `}</style>
    </main>
  );
}
