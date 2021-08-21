import GlobalNav from "../components/GlobalNav";
import { FirstVideoTile, ImageTile, VideoTile } from "../components/MediaTile";
import {
  FirstTextTile,
  InlineLink,
  TextTile,
  TitleTile,
} from "../components/TextTile";

export default function Outlet() {
  return (
    <main>
      <GlobalNav />
      <FirstTextTile>
        “No one succeeds alone”
        <br /> —{" "}
        <InlineLink
          href='https://twitter.com/MissGallo/status/1414947024387166216?s=20'
          text='Lauren Gallo'
        />
      </FirstTextTile>
      <FirstVideoTile poster={"nas.jpeg"} src={"nas.m3u8"} />
      <TextTile margin={"-4.5vh auto 9vh"}>
        I know I’m a few weeks late - the new
        <InlineLink
          href={
            "https://music.apple.com/nl/album/kings-disease-ii/1578569385?l=en"
          }
          text={" Nas album "}
        />{" "}
        is 🔥
      </TextTile>
      <ImageTile
        src={"plant.jpeg"}
        alt={"Phyllanthus Mirabilis."}
        caption={"Phyllanthus Mirabilis"}
      />
      <TextTile>
        Meet Phyllanthus Mirabilis. During dusk, the leaves fold together in
        pairs like a butterfly — honestly, I can’t 😍.{" "}
      </TextTile>
      <TextTile>
        Purchased in a cute antique, gifts, and plants shop called
        <InlineLink
          href='https://www.instagram.com/avalonamsterdam/'
          text=' Avalonamsterdam'
        />
      </TextTile>
      <VideoTile poster={"always-sunday.jpg"} src={"always-sunday.m3u8"} />
      <TextTile margin={"-4.5vh auto 9vh"}>
        Liking the low-key vibes I’m getting from playing{" "}
        <InlineLink
          href={
            "https://music.apple.com/nl/playlist/always-sunday/pl.401b996cbcda4861ae8da67b8cd3ff32?l=en"
          }
          text={"Always Sunday"}
        />{" "}
        in the background.
      </TextTile>

      <TitleTile title={"Summer"} />
      <ImageTile
        src={"apple-watch-march-challenge.jpeg"}
        alt={"Apple watch march challenge achievement"}
        caption={"Apple watch. March challenge achievement"}
      />
      <ImageTile
        src={"hibiki.jpg"}
        alt={"Hibiki"}
        caption={"Hibiki Japanese harmony by Suntory Tori"}
      />
      <TextTile>
        The lockdown was a perfect excuse for me to tinker with software,
        discover Amsterdam and buy plants — the urban jungle is real.
      </TextTile>
      <TextTile>
        Inward discussions helped me see that these habits are expressions of my
        energy and talent — an outlet. So I claimed this space and name.
      </TextTile>
      <TextTile>
        Outlet is a real-time feed of my energy and talents — posted
        chronologically. Hopefully, one day you’ll discover your outlet too.
      </TextTile>
      <TitleTile title={"Spring"} />
      <TitleTile title={"2021"} />
      <style jsx>{`
        main {
          width: 100%;
          margin-left: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: auto;
          padding: calc(7vh + 48px) 0 0;
        }
      `}</style>
    </main>
  );
}
