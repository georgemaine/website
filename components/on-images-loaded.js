export default function onImagesLoaded(images) {
  return new Promise((resolve) => {
    if (!images.length) {
      resolve();

      return;
    }

    let loadedCount = 0;

    function onComplete() {
      ++loadedCount;

      if (loadedCount === images.length) {
        resolve();
      }

      this.removeEventListener("load", onComplete);
      this.removeEventListener("error", onComplete);
    }

    images.forEach((img) => {
      if (img.complete) {
        onComplete.call(img);
      } else {
        img.addEventListener("load", onComplete);
        img.addEventListener("error", onComplete);
      }
    });
  });
}
