export const latestKnownSize = {
  height: window.innerHeight || 0,
  width: window.innerWidth || 0,
};

var sizeDebounce = false;

const SizeListeners = [];

function resetSizeDebounce() {
  sizeDebounce = false;
}

function onResize() {
  if (sizeDebounce) {
    return;
  }

  requestAnimationFrame(resetSizeDebounce);

  latestKnownSize.height = window.innerHeight;
  latestKnownSize.width = window.innerWidth;

  for (var i = SizeListeners.length - 1; i >= 0; i--) {
    SizeListeners[i](latestKnownSize);
  }

  sizeDebounce = true;
}

window.addEventListener("resize", onResize, { passive: true });

export default SizeListeners;
