import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import {
  StickyMediaTile,
  StickyMediaTileText,
} from "../components/StickyMediaTile";
import { InlineLink, TitleTile, TextTile } from "../components/TextTile";
import { ScrollBar } from "../components/ScrollBar";

export default function Outlet() {
  return (
    <>
      <ScrollBar />
      <main className='outlet'>
        <Head />
        <GlobalNav />

        <StickyMediaTile
          src={"hortus-1.jpeg"}
          alt={"Visited Hortus Botanicus Amsterdam"}
          margin={"0 0 9.5rem"}
        />
        <StickyMediaTile
          src={"hortus-3.jpeg"}
          alt={"Visited Hortus Botanicus Amsterdam"}
          width={"50%"}
          margin={"0 0 9.5rem"}
        />
        <StickyMediaTile
          src={"hortus-2.jpeg"}
          alt={"Visited Hortus Botanicus Amsterdam"}
        />
        <TitleTile>
          “No one succeeds alone.”
          <br /> — Lauren Gallo
        </TitleTile>

        <StickyMediaTile
          src={"plant.jpeg"}
          alt={"Bought the extraordinary Phyllanthus Mirabilis"}
        >
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
        <StickyMediaTile
          src={"hibiki.jpg"}
          alt={"Finally tasted Hibiki by Suntory Toki"}
        />
        <TitleTile>Summer</TitleTile>
        <StickyMediaTile
          src={"apple-watch-march-challenge.jpeg"}
          alt={"Completed Apple's March Challenge"}
        />
        <TextTile>
          I love tinkering with things — it empowers me to explore my ideas.
        </TextTile>
        <TextTile>
          Sometimes, I get <i>so caught</i> up in tinkering that nothing else
          really matters — I don’t even realize what time it is 🙈
        </TextTile>
        <TextTile>
          During the lockdown, I finally realized why I could spend hours
          tinkering, thinking it’s only a couple of minutes.
        </TextTile>
        <TextTile>
          I’m just expressing my emotion, energy, and talent — it’s my outlet.
        </TextTile>
        <TextTile>
          So, I came up with this page — a real-time feed of some of those
          expressions, posted chronologically.
        </TextTile>
        <TextTile>
          Hopefully, one day this page will tell me a story of all the times I
          messed up and kept going while exploring ideas. Haha.
        </TextTile>
        <TitleTile>Spring</TitleTile>
        <TitleTile>2021</TitleTile>
        <style jsx>{`
          main {
            width: 86vw;
            padding: calc(3.5vw + 4.8rem) 0;
            max-width: 168.8rem;
            margin: 0 auto;
            position: relative;
          }
        `}</style>
      </main>
    </>
  );
}
