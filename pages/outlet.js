import GlobalNav from "../components/GlobalNav";
import ImageTile from "../components/ImageTile";
import { TextTile, TitleTile } from "../components/TextTyle";
import SpringSection from "../components/SpringSection";

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

      <SpringSection />
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding-top: calc(14vh + 48px);
        }

        @media only screen and (min-width: 737px) {
          main {
            display: flex;
            max-width: initial;
            align-items: flex-end;
            margin: 7vw;
            padding: 0 7vw 0 0;
          }
        }
      `}</style>
    </main>
  );
}
