import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { Poster } from "../components/ShowTile";
import Rebound from "../components/Rebound";

const Posters = [
  {
    name: "The morning show",
    image: "show1.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "Ted Lasso",
    image: "show2.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "See",
    image: "show3.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "Truth be told",
    image: "show4.jpg",
    description: "Type · Genre · Releasedate",
  },
  {
    name: "The broadway musical",
    image: "show5.jpg",
    description: "Type · Genre · Releasedate",
  },
];

const selectScaleIndex = [1, 0.9, 0.82, 0.74, 0.68];
const selectOffsetScale = [1, 0.86, 0.86, 0.78, 0.77];
const selectOpacityIndex = [0.03, 0.14, 0.77, 0.67, 0.58];

var springSystem = new Rebound.SpringSystem();
var mainSpring = springSystem.createSpring();
var downSpring = springSystem.createSpring();

const calculateXOffsetForIndex = (index, scale) => {
  const imageWidth = 225;
  const offset = imageWidth - imageWidth * scale;
  return offset * selectOffsetScale[index];
};

export default function MovieList() {
  return (
    <main>
      <Head />
      <GlobalNav />
      {Posters.map((value, i) => {
        const scale = selectScaleIndex[i];
        const x = calculateXOffsetForIndex(i, scale);
        const opacity = selectOpacityIndex[i];
        const z = -1 * i;
        const rotate = i * 2;
        return (
          <Poster
            key={i}
            src={value.image}
            caption={value.name}
            description={value.description}
            opacity={opacity}
            index={i}
            style={{
              transform: `translate3d(${x}px, 0,${z}px) rotate(${rotate}deg) scale(${scale})`,
            }}
          />
        );
      })}
      <style jsx>{`
        main {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform-style: preserve-3d;
        }
      `}</style>
    </main>
  );
}
