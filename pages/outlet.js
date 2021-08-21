import GlobalNav from "../components/GlobalNav";
import ImageTile from "../components/ImageTile";
import { TextTile, TitleTile } from "../components/TextTyle";

export default function Outlet() {
  return (
    <main>
      <GlobalNav />
      <ImageTile
        src={"plant.jpeg"}
        alt={"Phyllanthus Mirabilis."}
        caption={"Phyllanthus Mirabilis. 2021."}
      />
      <TextTile
        text={
          "Meet Phyllanthus Mirabilis. During dusk, the leaves fold together in pairs like a butterfly — honestly, I can't 😍. "
        }
      />
      <TextTile
        text={
          "Purchased in a cute antique, gifts, and plants shop called avalanamsterdam →"
        }
      />
      <TitleTile title={"Summer 2021."} />
      <ImageTile
        src={"always-sunday.jpg"}
        alt={"Always Sunday, Playlist on Apple music."}
        caption={"Always Sunday, Playlist on Apple music. 2021."}
      />
      <TextTile
        text={
          "Always Sunday, a playlist from Apple music is my way of starting the weekend. It’s filled with calm background music with blues vibes in there — some vocals, some not."
        }
      />

      <ImageTile
        src={"apple-watch-march-challenge.jpeg"}
        alt={"Apple watch march challenge achievement"}
        caption={"Apple watch. March challenge achievement. 2021."}
      />
      <ImageTile
        src={"hibiki.jpg"}
        alt={"Hibiki"}
        caption={"Hibiki Japanese harmony by Suntory Tori. 2021."}
      />
      <TitleTile title={"Spring 2021."} />
      <style jsx>{`
        main {
          width: 86vw;
          max-width: 168.8rem;
          margin-left: auto;
          margin-right: auto;
          padding-top: calc(14vh + 48px);
        }
      `}</style>
    </main>
  );
}
