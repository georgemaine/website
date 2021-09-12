const latestKnownScrollY = window.pageYOffset || 0,
  scrollDebounce = false,
  scrollListeners = [],
  scrollListenersLength = 0;

const onRAF = () => {
  for (let i = scrollListenersLength; i--; ) {
    scrollListeners[i]({
      latestKnownScrollY,
    });
  }

  scrollDebounce = false;
};

const onScroll = () => {
  if (scrollDebounce) return;

  scrollDebounce = true;

  latestKnownScrollY = window.pageYOffset; // No IE8

  requestAnimationFrame(onRAF);
};

window.addEventListener("scroll", onScroll, { passive: true });

export default class ScrollSection {
  constructor(element, { onInView, onOutOfView, onScroll, threshold = 0 }) {
    if (!element) return;

    this.el = element;

    this.onInView = onInView;
    this.onOutOfView = onOutOfView;
    this.onScroll = onScroll;

    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(
        (e) => this.intersectionObserver(e),
        {
          threshold,
        }
      );
      this.observer.observe(this.el);
    }
  }

  intersectionObserver([event]) {
    if (event.intersectionRatio > 0) {
      this.inView(event);
      return;
    }

    this.outOfView(event);
  }

  inView(event) {
    if (this.onInView) {
      this.onInView(event);
    }

    if (this.onScroll) {
      this.onScroll({
        latestKnownScrollY,
      });

      scrollListeners.push(this.onScroll);

      scrollListenersLength = scrollListeners.length;
    }
  }

  outOfView(event) {
    if (this.onOutOfView) {
      this.onOutOfView(event);
    }

    if (this.onScroll) {
      scrollListeners = scrollListeners.filter((item) => {
        return item != this.onScroll;
      });

      scrollListenersLength = scrollListeners.length;
    }
  }

  get relativeScrollY() {
    return latestKnownScrollY - this.el.offsetTop;
  }
}
