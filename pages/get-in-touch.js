import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { StickyMediaTile } from "../components/StickyMediaTile";
import { TextWithTransition, InlineLink } from "../components/TextTile";
import { ScrollBar } from "../components/ScrollBar";

export default function GetInTouch() {
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
              <Head />
              <GlobalNav />

              <video
                loop
                autoPlay
                playsInline
                preload='auto'
                muted
                style={{
                  width: "100%",
                  borderRadius: "1rem",
                  border: "1px solid var(--dark-border)",
                }}
              >
                <source src={"media/georgemaine.mp4"} type='video/mp4' />
              </video>

              <TextWithTransition>
                As you may or may not be aware, I’ve always been fascinated with
                how things work.
              </TextWithTransition>

              <TextWithTransition>
                Could I remake it differently? Would people prefer that?
              </TextWithTransition>
              <TextWithTransition>
                The part I hated was showing my version to people — Go figure.
              </TextWithTransition>
              <TextWithTransition>
                Currently, I’m an indoor gardener and product designer at{" "}
                <InlineLink href={"https://pitch.io"} text={"Pitch"} />
              </TextWithTransition>
              <TextWithTransition>
                I love surrounding myself with extraordinary people and plants —
                they teach me so much and make me a better person.
              </TextWithTransition>
              <TextWithTransition>
                If you love that too, reach out via{" "}
                <InlineLink
                  href={
                    "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B"
                  }
                  text={"Email"}
                />
                ,
                <InlineLink
                  href={"https://twitter.com/georgemaine"}
                  text={"Twitter"}
                />
                , or{" "}
                <InlineLink
                  href={"https://www.linkedin.com/in/georgemaine"}
                  text={"LinkedIn"}
                />
              </TextWithTransition>
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
