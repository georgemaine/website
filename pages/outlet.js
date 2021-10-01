import { useEffect, useRef, useState } from "react";
import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import {
  StickyMediaTile,
  StickyMediaTileText,
} from "../components/StickyMediaTile";
import { InlineLink, TitleTile, TextTile } from "../components/TextTile";

const ScrollBarBackground = () => {
  return (
    <div>
      <style jsx>{`
        div {
          background: var(--black);
          opacity: 0.2;
          border-radius: 0.4rem;
          width: 0.4rem;
          position: absolute;
          top: 0;
          bottom: 0;
        }
      `}</style>
    </div>
  );
};

const getOffsetTop = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return rect.top + scrollTop;
};

const modulate = (value, rangeA, rangeB, limit = false) => {
  const [fromLow, fromHigh] = rangeA;
  const [toLow, toHigh] = rangeB;
  const result =
    toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);

  if (limit === true) {
    if (toLow < toHigh) {
      if (result < toLow) {
        return toLow;
      }
      if (result > toHigh) {
        return toHigh;
      }
    } else {
      if (result > toLow) {
        return toLow;
      }
      if (result < toHigh) {
        return toHigh;
      }
    }
  }

  return result;
};

const ScrollThumb = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const ref = document.querySelector(".outlet");
    const scrollHandler = () => {
      const scrollPos = window.scrollY;
      const startPos = getOffsetTop(ref);
      const endPos = startPos + ref.clientHeight;
      const progress = modulate(scrollPos, [startPos, endPos], [0, 1], true);
      setProgress(progress);
    };

    if (ref) {
      document.body.addEventListener("touchmove", scrollHandler);
      window.addEventListener("scroll", scrollHandler);
      scrollHandler();
    }

    console.log("progress", progress);
  }, [progress]);
  return (
    <div style={{ transform: `translateY(${progress * 5.2}rem)` }}>
      <style jsx>{`
        div {
          height: 1.2rem;
          width: 0.4rem;
          background: var(--black);
          border-radius: 0.4rem;
          position: absolute;
          margin: auto 0;
        }
      `}</style>
    </div>
  );
};

const ScrollBar = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          width: 0.4rem;
          height: 6.4rem;
          right: 1.2rem;
          position: fixed;
          top: 0;
          bottom: 0;
          margin: auto 0;
          z-index: 40;
          /* animation: scrollbar-show 0.7s ease 0.6s 1 normal both; */
        }

        @keyframes scrollbar-show {
          0% {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default function Outlet() {
  return (
    <main className='outlet'>
      <Head />
      <GlobalNav />
      <ScrollBar>
        <ScrollBarBackground />
        <ScrollThumb />
      </ScrollBar>
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
          margin-left: auto;
          margin-right: auto;
          padding: calc(3.5vw + 4.8rem) 0;
          max-width: 168.8rem;
          min-height: 100vh;
        }

        ::-webkit-scrollbar {
          width: 0;
          background: transparent;
          display: none;
        }
      `}</style>
    </main>
  );
}
