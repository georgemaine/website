export const Features = {
  get isSmoothScrollSupported() {
    if (typeof this._isSmoothScrollSupported === "undefined") {
      this._isSmoothScrollSupported =
        "scrollBehavior" in document.documentElement.style;
    }

    return this._isSmoothScrollSupported;
  },

  get isAnimationEnabled() {
    return !this.isReducedMotion && this.hasIntersectionObserver;
  },

  get hasIntersectionObserver() {
    if (typeof this._hasIntersectionObserver === "undefined") {
      const hasObserver = !!window.IntersectionObserver;
      const hasObserverEntry =
        hasObserver &&
        !!window.IntersectionObserverEntry &&
        !!window.IntersectionObserverEntry.prototype;
      const hasObserverEntryIntersection =
        hasObserverEntry &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype;

      this._hasIntersectionObserver =
        hasObserver && hasObserverEntry && hasObserverEntryIntersection;
    }

    return this._hasIntersectionObserver;
  },

  get isReducedMotion() {
    if (typeof this._isReducedMotion === "undefined") {
      this._isReducedMotion = !!window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }

    return this._isReducedMotion;
  },
};

export default Features;
