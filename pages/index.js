import GlobalNav from "../components/GlobalNav";
import Plx from "react-plx";

const FadeinTextTween = [
  {
    start: "self",
    duration: ".fade-in-text",
    easing: "ease",
    startOffset: -70,
    endOffset: 70,
    properties: [
      {
        startValue: 70,
        endValue: -70,

        property: "translateY",
      },
    ],
  },
];

// FIXME: Add to object
const MediaTween = [
  {
    start: "self",
    duration: "100vh",
    easing: "easeOutQuad",
    properties: [
      {
        startValue: -30,
        endValue: -0,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
];

const FadeMediaAnimationTween = [
  {
    start: "self",
    duration: "100vh",
    startOffset: "5vh",
    endOffset: "-25vh",
    easing: "easeOutQuad",
    properties: [
      {
        startValue: 0.001,
        endValue: 0.999,
        property: "opacity",
      },
    ],
  },
];

const VideoBackgroundHeroSection = {
  sectionHeadline: "Mobile apps for Mollie Payments",
  sectionClassName: "mobile-apps",
  sectionDescription: "Product Design · 2019-2020",
  mediaSrc: "media/mollie-mobile.mp4",
};

const VideoBackgroundSectionItems = [
  {
    sectionHeadline: "Promo Video for Mollie Payments",
    sectionClassName: "promo-video",
    sectionDescription: "Design & Video · 2019",
    mediaSrc: "media/promo-video.mp4",
  },
  {
    sectionHeadline: "Checkout for Mollie Payments",
    sectionClassName: "checkout",
    sectionDescription: "Product Design & Development · 2019",
    mediaSrc: "media/mollie-checkout.mp4",
  },
  {
    sectionHeadline: "Launch video for Mollie Payments",
    sectionClassName: "launch-video",
    sectionDescription: "Design & Video · 2018",
    mediaSrc: "media/launch-video.mp4",
  },
];

const VideoBackgroundSection = ({ children }) => {
  return (
    <section className='video-background-section'>
      {children}
      <style jsx>{`
        section {
          background: var(--black);
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        section:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0) 52.5rem
          );
        }
      `}</style>
    </section>
  );
};

const Video = ({ videoSrc }) => {
  return (
    <video loop autoPlay playsInline preload='auto' muted>
      <source src={videoSrc} type='video/mp4' />
      <style jsx>{`
        video {
          position: absolute;
          object-fit: cover;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </video>
  );
};

const MediaContainer = ({ mediaSrc }) => {
  return (
    <Plx
      parallaxData={MediaTween}
      animateWhenNotInViewport
      className={"media-container"}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
      }}
    >
      <Plx
        parallaxData={FadeMediaAnimationTween}
        animateWhenNotInViewport
        style={{
          opacity: 0.001,
        }}
      >
        <Video videoSrc={mediaSrc} />
      </Plx>
    </Plx>
  );
};

const HeroSectionCopy = ({ sectionHeadline, sectionDescription }) => {
  return (
    <div>
      <h2>{sectionHeadline}</h2>
      <p>{sectionDescription}</p>

      <style jsx>{`
        div {
          position: relative;
          height: 100%;
          margin-left: 7vw;
          padding-bottom: calc(4.5vh + 7rem);
          color: var(--white);
          display: flex;
          flex-direction: column;
          z-index: 2;
          justify-content: flex-end;
        }

        p {
          font-size: 1.7rem;
          margin: 0.9rem 0 0;
          line-height: 1.41667;
          letter-spacing: 0;
          font-weight: 700;
        }

        h2 {
          font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          max-width: 60%;
          margin: 0;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          transition: opacity 0.6s linear,
            transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: 2.4rem;
          }

          h2 {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
            max-width: 50%;
          }
        }

        @media (min-width: 126rem) {
          h2 {
            font-size: calc(5.6rem + 56 * (100vw - 140rem) / 1400);
            letter-spacing: -0.015rem;
            line-height: 1.05;
            max-width: 40%;
          }
        }
      `}</style>
    </div>
  );
};

const SectionCopy = ({ sectionHeadline, sectionDescription }) => {
  return (
    <div className={"content-wrapper"}>
      <Plx parallaxData={FadeinTextTween} animateWhenNotInViewport>
        <div className={"fade-in-text"}>
          <h2>{sectionHeadline}</h2>
          <p>{sectionDescription}</p>
        </div>
      </Plx>
      <style jsx>{`
        .content-wrapper {
          position: relative;
          height: 100%;
          margin-left: 7vw;
          padding-bottom: 4.5vh;
          color: var(--white);
          display: flex;
          z-index: 2;
          align-items: flex-end;
        }

        p {
          font-size: 1.7rem;
          margin: 0.9rem 0 0;
          line-height: 1.41667;
          letter-spacing: 0;
          font-weight: 700;
        }

        h2 {
          font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          max-width: 60%;
          margin: 0;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          transition: opacity 0.6s linear,
            transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: 2.4rem;
          }

          h2 {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
          }
        }

        @media (min-width: 126rem) {
          h2 {
            font-size: calc(5.6rem + 56 * (100vw - 140rem) / 1400);
            letter-spacing: -0.015rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </div>
  );
};

export default function Components() {
  return (
    <>
      <main>
        <VideoBackgroundSection>
          <HeroSectionCopy
            sectionHeadline={VideoBackgroundHeroSection.sectionHeadline}
            sectionDescription={VideoBackgroundHeroSection.sectionDescription}
          />
          <Video videoSrc={VideoBackgroundHeroSection.mediaSrc} />
        </VideoBackgroundSection>
        {VideoBackgroundSectionItems.map((node, index) => {
          return (
            <VideoBackgroundSection
              key={index}
              className={node.sectionClassName}
            >
              <SectionCopy
                sectionHeadline={node.sectionHeadline}
                sectionDescription={node.sectionDescription}
              />
              <MediaContainer mediaSrc={node.mediaSrc} />
            </VideoBackgroundSection>
          );
        })}
        <style jsx>{`
          main {
            background: var(--black);
          }
        `}</style>
      </main>

      <GlobalNav onMedia={true} />
    </>
  );
}
