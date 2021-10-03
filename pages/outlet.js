import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { StickyMediaTile } from "../components/StickyMediaTile";
import {
  InlineLink,
  TitleTile,
  TextWithTransition,
} from "../components/TextTile";
import { ScrollBar } from "../components/ScrollBar";
// import hortus1 from "/media/hortus-1.jpeg";
// import hortus2 from "/media/hortus-2.jpeg";
// import hortus3 from "/media/hortus-3.jpeg";
// import plant from "/media/plant.jpeg";
// import alwaysSunday from "/media/always-sunday.jpg";
// import hibiki from "/media/hibiki.jpg";
// import appleWatchMarchChallenge from "/media/apple-watch-march-challenge.jpeg";
import { useEffect } from "react";

const hortus1 = "/media/hortus-1.jpeg";
const hortus2 = "/media/hortus-2.jpeg";
const hortus3 = "/media/hortus-3.jpeg";
const plant = "/media/plant.jpeg";
const alwaysSunday = "/media/always-sunday.jpg";
const hibiki = "/media/hibiki.jpg";
const appleWatchMarchChallenge = "/media/apple-watch-march-challenge.jpeg";
const imageList = [
  hortus1,
  hortus2,
  hortus3,
  plant,
  alwaysSunday,
  hibiki,
  appleWatchMarchChallenge,
];
export default function Outlet() {
  useEffect(() => {
    // console.log("imagesList", imageList);
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          <div
            className='scroll-container'
            style={{
              position: "absolute",
              overflowY: "scroll",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <ScrollBar />
            <main>
              <Head>
                {imageList.map((image, index) => {
                  return (
                    <link key={index} rel='preload' href={image} as='image' />
                  );
                })}
              </Head>
              <GlobalNav />

              <StickyMediaTile
                src={hortus1}
                alt={"Visited Hortus Botanicus Amsterdam"}
                margin={"0 0 9.5rem"}
                imgHeight={1450}
                imgWidth={1947}
              />
              <StickyMediaTile
                src={hortus3}
                alt={"Visited Hortus Botanicus Amsterdam"}
                width={"50%"}
                margin={"0 0 9.5rem"}
                imgHeight={3024}
                imgWidth={4032}
              />
              <StickyMediaTile
                src={hortus2}
                alt={"Visited Hortus Botanicus Amsterdam"}
                imgHeight={2851}
                imgWidth={3997}
              />
              <TitleTile>
                “No one succeeds alone.”
                <br /> — Lauren Gallo
              </TitleTile>

              <StickyMediaTile
                src={plant}
                alt={"Bought the extraordinary Phyllanthus Mirabilis"}
                imgWidth={4032}
                imgHeight={3024}
              >
                <TextWithTransition>
                  Meet Phyllanthus Mirabilis. During dusk, the leaves fold
                  together in pairs like a butterfly — honestly, I can’t 😍.
                  It’s from{" "}
                  <InlineLink
                    href='https://www.instagram.com/avalonamsterdam/'
                    text=' Avalonamsterdam'
                  />
                  , a cute plants shop.
                </TextWithTransition>
              </StickyMediaTile>
              <StickyMediaTile
                src={alwaysSunday}
                alt={"Always Sunday by Music"}
                width={"50%"}
                imgWidth={1158}
                imgHeight={1158}
              >
                <TextWithTransition>
                  Lately, most of my weekends start with playing{" "}
                  <InlineLink
                    href={
                      "https://music.apple.com/nl/playlist/always-sunday/pl.401b996cbcda4861ae8da67b8cd3ff32?l=en"
                    }
                    text={"Always Sunday"}
                  />{" "}
                  in the background. Genuinely enjoying the lovely low-key
                  vibes.
                </TextWithTransition>
              </StickyMediaTile>
              <StickyMediaTile
                src={hibiki}
                alt={"Finally tasted Hibiki by Suntory Toki"}
                imgWidth={4032}
                imgHeight={3024}
              />
              <TitleTile>Summer</TitleTile>
              <StickyMediaTile
                src={appleWatchMarchChallenge}
                alt={"Completed Apple's March Challenge"}
                imgWidth={2875}
                imgHeight={3833}
              />
              <TextWithTransition>
                I love tinkering with things — it empowers me to explore my
                ideas.
              </TextWithTransition>
              <TextWithTransition>
                Sometimes, I get <i>so caught</i> up in tinkering that nothing
                else really matters — I don’t even realize what time it is 🙈
              </TextWithTransition>
              <TextWithTransition>
                During the lockdown, I finally realized why I could spend hours
                tinkering, thinking it’s only a couple of minutes.
              </TextWithTransition>
              <TextWithTransition>
                I’m just expressing my emotion, energy, and talent — it’s my
                outlet.
              </TextWithTransition>
              <TextWithTransition>
                So, I came up with this page — a real-time feed of some of those
                expressions, posted chronologically.
              </TextWithTransition>
              <TextWithTransition>
                Hopefully, one day this page will tell me a story of all the
                times I messed up and kept going while exploring ideas. Haha.
              </TextWithTransition>
              <TitleTile>Spring</TitleTile>
              <TitleTile>2021</TitleTile>
            </main>
          </div>
        </div>
      </div>
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: calc(18vh + 2.8rem) 0 30vh;
          max-width: 168.8rem;
        }
      `}</style>
    </div>
  );
}
