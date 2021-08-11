import GlobalNav from "../components/GlobalNav";
import ImageTile from "../components/ImageTile";
import TextTile from "../components/TextTyle";

export default function Outlet() {
  return (
    <main>
      <GlobalNav />
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
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding-top: 48px;
        }

        @media only screen and (min-width: 737px) {
          main {
            display: flex;
            max-width: initial;
            align-items: flex-end;
            margin: 0 auto 0 54px;
          }
        }
      `}</style>
    </main>
  );
}
