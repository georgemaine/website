import ScrollSection from "../helpers/scroll-section";
import Features from "./features";
import SizeListeners from "./size-listeners";
import onImagesLoaded from "./on-images-loaded";

export default class Parallax {
  constructor(el, options = {}) {
    this.el = el;
    this.content = el.querySelector(".js-parallax-content");
    this.header = document.querySelector(".header-container");
    this.options = options;

    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onScroll = (this.options.onScroll || this.onScroll).bind(this);
    this.setSizes = this.options.setSizes || this.setSizes;
    this.setSizes = this.setSizes.bind(this);

    SizeListeners.push(this.setSizes);

    if (Features.isAnimationEnabled) {
      this.scrollSection = new ScrollSection(this.el, {
        threshold: [0],
        onInView: this.onEnter,
        onOutOfView: this.onExit,
        onScroll: this.onScroll,
      });
    } else {
      this.scrollSection = new ScrollSection(this.el, {
        threshold: [0],
        onInView: this.onEnter,
        onOutOfView: this.onExit,
      });
    }

    this.setSizes();
    onImagesLoaded(Array.from(this.el.querySelectorAll("img"))).then(
      this.setSizes
    );
  }

  onEnter() {
    if (this.options.headerClasses) {
      this.header.classList.add(...this.options.headerClasses);
    }
  }

  onExit() {
    if (this.options.headerClasses) {
      this.header.classList.remove(...this.options.headerClasses);
    }
  }

  onScroll() {
    var progress =
      1 -
      Math.max(
        (this.duration -
          this.scrollSection.relativeScrollY -
          this.headerHeight) /
          this.duration,
        0
      );

    this.content.style.transform = `translate(0, ${progress * -25}%)`;
  }

  setSizes() {
    this.duration = this.el.clientHeight;
    this.headerHeight = this.header.clientHeight;
    this.options.onScroll.bind(this) || this.onScroll;
  }
}
