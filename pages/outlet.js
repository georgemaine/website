import GlobalNav from "../components/GlobalNav";
import {
  StickyMediaTile,
  StickyMediaTileText,
} from "../components/StickyMediaTile";
import { InlineLink, TitleTile, TextTile } from "../components/TextTile";
import hortus1 from "../public/media/hortus-1.jpeg";
import hortus3 from "../public/media/hortus-3.jpeg";
import hortus2 from "../public/media/hortus-2.jpeg";
import plant from "../public/media/plant.jpeg";
import alwaysSunday from "../public/media/always-sunday.jpg";
import watch from "../public/media/apple-watch-march-challenge.jpeg";
import hibiki from "../public/media/hibiki.jpg";

export default function Outlet() {
  return (
    <main>
      <GlobalNav />
      <StickyMediaTile
        src={hortus1}
        alt={"Hortus Botanicus Amsterdam"}
        margin={"0 0 9.5rem"}
      />
      <StickyMediaTile
        src={hortus3}
        alt={"Hortus Botanicus Amsterdam"}
        width={"50%"}
        margin={"0 0 9.5rem"}
      />
      <StickyMediaTile src={hortus2} alt={"Hortus Botanicus Amsterdam"} />
      <StickyMediaTile src={plant} alt={"Phyllanthus Mirabilis."}>
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
        src={alwaysSunday}
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
      <StickyMediaTile src={hibiki} alt={"Hibiki by Suntory Toki"} />

      <TitleTile title={"Summer"} />
      <StickyMediaTile src={watch} alt={"Completed Apple's March Challenge"} />
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
      <TitleTile title={"Spring"} />
      <TitleTile title={"2021"} />
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: calc(3.5vw + 4.8rem) 0 0;
          max-width: 168.8rem;
        }
      `}</style>
    </main>
  );
}
