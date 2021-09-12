import { useEffect } from "react";
import GlobalNav from "../components/GlobalNav";
import { StickyMediaTile } from "../components/StickyMediaTile";
import { TextTile, InlineLink } from "../components/TextTile";

export default function GetInTouch() {
  useEffect(() => {
    // const elements = Array.from(
    //   document.querySelectorAll(".anim-text-animate")
    // );
    // function inView(el) {
    //   var rect = el.getBoundingClientRect();
    //   return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <=
    //       (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <=
    //       (window.innerWidth || document.documentElement.clientWidth)
    //   );
    // }
    // function onViewChange(el, callback) {
    //   var old_visible;
    //   return function () {
    //     var visible = inView(el);
    //     if (visible != old_visible) {
    //       old_visible = visible;
    //       if (typeof callback == "function") {
    //         callback();
    //       }
    //     }
    //   };
    // }
    // var handler = onViewChange(elements[0], function () {
    //   if (
    //     inView(elements[0]) &&
    //     !elements[0].classList.contains("animated-text-element")
    //   ) {
    //     elements[0].classList.add("animated-text-element");
    //   }
    // });
    // window.addEventListener("scroll", handler, {
    //   passive: true,
    // });
    // return () => window.removeEventListener("scroll", handler);
    // window.addEventListener(
    //   "DOMContentLoaded",
    //   elements.forEach((element) => {
    //     isElementInViewport(element);
    //   })
    // );
    // window.addEventListener(
    //   "scroll",
    //   elements.forEach((element) => {
    //     isElementInViewport(element)
    //       ? console.log("inView")
    //       : console.log("OutView");
    //   })
    // );
    // return () => {
    //   window.removeEventListener(
    //     "DOMContentLoaded",
    //     elements.forEach((element) => {
    //       isElementInViewport(element);
    //     })
    //   ),
    //     window.removeEventListener(
    //       "scroll",
    //       elements.forEach((element) => {
    //         isElementInViewport(element)
    //           ? console.log("inView")
    //           : console.log("OutView");
    //       })
    //     );
    // };
    // if (window.addEventListener) {
    //   addEventListener('DOMContentLoaded',  elements.forEach((element => {
    //   isElementInViewport(element)
    // })), false);
    //   addEventListener('load',  elements.forEach((element => {
    //   isElementInViewport(element)
    // })), false);
    //   addEventListener('scroll',  elements.forEach((element => {
    //   isElementInViewport(element)
    // })), false);
    //   addEventListener('resize',  elements.forEach((element => {
    //   isElementInViewport(element)
    // })), false);
  }, []);
  return (
    <main>
      <GlobalNav />
      <StickyMediaTile
        src={"georgemaine.jpg"}
        alt={"Georgemaine Lourens"}
        margin={"0 0 9.5rem"}
      />
      <TextTile>Hello, world — I love tinkering with software.</TextTile>
      <TextTile>
        Ever since I was a young kid, I was fascinated with how things worked.
      </TextTile>
      <TextTile>
        Can I remake it differently? Would people prefer that better?
      </TextTile>
      <TextTile>
        The part I hated was showing my version to people — Go figure.
      </TextTile>
      <TextTile>
        Currently, I’m a product designer at Pitch. I work together with
        incredible people who made me a better person and taught me so much.
      </TextTile>
      <TextTile>
        And, I still love learning from people their stories. So if you love
        that too, reach out via{" "}
        <InlineLink
          href={
            "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B"
          }
          text={"Email"}
        />
        ,
        <InlineLink href={"https://twitter.com/georgemaine"} text={"Twitter"} />
        , or{" "}
        <InlineLink
          href={"https://www.linkedin.com/in/georgemaine"}
          text={"LinkedIn"}
        />
      </TextTile>
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: calc(3.5vw + 4.8rem) 0
            calc(20rem + env(safe-area-inset-bottom));
          max-width: 168.8rem;
        }
      `}</style>
    </main>
  );
}
