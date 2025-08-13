export const imagesToPreload = [
  new URL("../assets/icons/down.svg", import.meta.url).href,
  new URL("../assets/icons/left.svg", import.meta.url).href,
  new URL("../assets/icons/note.svg", import.meta.url).href,
  new URL("../assets/icons/up.svg", import.meta.url).href,
  new URL("../assets/images/arrow.svg", import.meta.url).href,
  new URL("../assets/images/close.svg", import.meta.url).href,
  new URL("../assets/images/contentSelect.svg", import.meta.url).href,
  new URL("../assets/images/downImage.svg", import.meta.url).href,
  new URL("../assets/images/leftImage.svg", import.meta.url).href,
  new URL("../assets/images/note.svg", import.meta.url).href,
  new URL("../assets/images/upImage.svg", import.meta.url).href,
];

export const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
