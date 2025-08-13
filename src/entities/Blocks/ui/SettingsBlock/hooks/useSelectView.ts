import { useState, useCallback } from "react";
import type { Orientation } from "@entities/Blocks/model/blockSlice";

export const useSelectView = (initialOrientation: Orientation) => {
  const [currentOrientation, setCurrentOrientation] =
    useState<Orientation>(initialOrientation);

  const handleOrientationSelect = useCallback((orientation: Orientation) => {
    setCurrentOrientation(orientation);
  }, []);

  return { currentOrientation, handleOrientationSelect };
};
