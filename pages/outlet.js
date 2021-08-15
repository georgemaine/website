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
        caption={"Phyllanthus Mirabilis"}
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
      <TitleTile title={"Summer 2021"} />
      <ImageTile
        src={"always-sunday.jpg"}
        alt={"Always Sunday, Playlist on Apple music."}
        caption={"Always Sunday, Playlist on Apple music"}
      />
      <TextTile
        margin={"-4.5vh 0 9vh"}
        text={
          "The low-key songs in the Always Sunday playlist are becoming my favorite vibes to start the weekend with."
        }
      />

      <ImageTile
        src={"apple-watch-march-challenge.jpeg"}
        alt={"Apple watch march challenge achievement"}
        caption={"Apple watch. March challenge achievement"}
      />

      <TitleTile title={"Spring 2021"} />
      <ImageTile
        src={"hibiki.jpg"}
        alt={"Hibiki"}
        caption={"Hibiki Japanese harmony by Suntory Tori"}
      />
      <TextTile
        text={
          "The lockdown was a perfect excuse for me to tinker with software, discover Amsterdam and buy plants — the urban jungle is real."
        }
      />
      <TextTile
        text={
          "Inward discussions helped me see that these habits are expressions of my energy and talent — an outlet. So I claimed this space and name."
        }
      />
      <TextTile
        text={
          "Outlet is a real-time feed of my energy and talents — posted chronologically. Hopefully, one day you’ll discover your outlet too."
        }
      />
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: calc(14vh + 48px) 0 14vh;
        }

        @media only screen and (min-width: 737px) {
          main {
            display: flex;
            max-width: initial;
            align-items: flex-end;
            margin: 6vw;
            padding: 0 7vw 0 0;
          }
        }
      `}</style>
    </main>
  );
}
