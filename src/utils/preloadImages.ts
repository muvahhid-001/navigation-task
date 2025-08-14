import {
  orientationMap,
  orientationMapIcons,
} from "@/features/SettingsBlock/lib/constants";

export const preloadImages = () => {
  const allImages = [
    ...Object.values(orientationMap),
    ...Object.values(orientationMapIcons),
  ];

  allImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
