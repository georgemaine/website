import GlobalNav from "../components/GlobalNav";
import {
  StickyMediaTile,
  StickyMediaTileText,
} from "../components/StickyMediaTile";
import {
  InlineLink,
  StaticTextTile,
  TitleTile,
  TextTile,
} from "../components/TextTile";

export default function Outlet() {
  return (
    <main>
      <GlobalNav />
      <StaticTextTile>
        “Noone succeeds alone”
        <br /> — Lauren Gallo
      </StaticTextTile>
      <StickyMediaTile
        src={"nas.jpeg"}
        alt={"King's Disease II by Nas"}
        width={"50%"}
      >
        <StickyMediaTileText>
          The more I listen to Nas’s{" "}
          <InlineLink
            href={
              "https://music.apple.com/nl/album/kings-disease-ii/1578569385?l=en"
            }
            text={"new Album"}
          />
          , the more I like it 🔥
        </StickyMediaTileText>
      </StickyMediaTile>
      <StickyMediaTile src={"plant.jpeg"} alt={"Phyllanthus Mirabilis."}>
        <StickyMediaTileText>
          Meet Phyllanthus Mirabilis. During dusk, the leaves fold together in
          pairs like a butterfly — honestly, I can’t 😍.
        </StickyMediaTileText>
        <StickyMediaTileText>
          It’s from a cute antique and plants shop called&nbsp;
          <InlineLink
            href='https://www.instagram.com/avalonamsterdam/'
            text=' Avalonamsterdam'
          />
        </StickyMediaTileText>
      </StickyMediaTile>
      <StickyMediaTile
        src={"always-sunday.jpg"}
        alt={"Always Sunday by Music"}
        width={"50%"}
      >
        <StickyMediaTileText>
          Liking the low-key vibes I’m getting from playing{" "}
          <InlineLink
            href={
              "https://music.apple.com/nl/playlist/always-sunday/pl.401b996cbcda4861ae8da67b8cd3ff32?l=en"
            }
            text={"Always Sunday"}
          />{" "}
          in the background.
        </StickyMediaTileText>
      </StickyMediaTile>
      <TitleTile title={"Summer"} />
      <StickyMediaTile
        src={"apple-watch-march-challenge.jpeg"}
        alt={"Completed Apple's March Challenge"}
      />
      <StickyMediaTile src={"hibiki.jpg"} alt={"Hibiki by Suntory Toki"} />
      <TextTile>
        The lockdown was a perfect excuse for me to tinker with software,
        discover Amsterdam and buy plants — the urban jungle is real.
      </TextTile>
      <TextTile>
        Inward discussions helped me see that these habits are just expressions
        of my energy and talent — an outlet.
      </TextTile>
      <TextTile>
        Outlet is a real-time feed of my energy and talents — posted
        chronologically. Hopefully, one day you’ll discover your outlet too.
      </TextTile>
      {/*
       */}
      <TitleTile title={"Spring"} />
      <TitleTile title={"2021"} />
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: calc(7vh + 48px) 0 0;
          max-width: 168.8rem;
        }
      `}</style>
    </main>
  );
}
