import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBlocks,
  setOrientation,
} from "@entities/Blocks/model/blockSlice";
import type { Orientation } from "@entities/Blocks/model/blockSlice";

export const useSettingsBlock = (
  activeSettingsId: string,
  onOrientationPreview: (id: string, orientation: Orientation) => void
) => {
  const dispatch = useDispatch();
  const blocks = useSelector(selectBlocks);
  const activeBlock = blocks.find((b) => b.id === activeSettingsId);

  const [localOrientation, setLocalOrientation] = useState<Orientation>(
    activeBlock?.orientation ?? "left"
  );
  const [showSelectView, setShowSelectView] = useState(false);

  useEffect(() => {
    onOrientationPreview(activeSettingsId, localOrientation);
  }, [localOrientation]);

  const toggleSelectView = useCallback(() => {
    setShowSelectView((prev) => !prev);
  }, []);

  const handleSelect = useCallback(() => {
    setShowSelectView(false);
  }, []);

  const handleSaveOrientation = useCallback(() => {
    if (localOrientation !== activeBlock?.orientation) {
      dispatch(
        setOrientation({ id: activeSettingsId, orientation: localOrientation })
      );
    }
  }, [localOrientation, activeBlock, dispatch]);

  return {
    showSelectView,
    localOrientation,
    blocks,
    toggleSelectView,
    handleSelect,
    handleSaveOrientation,
    setLocalOrientation,
  };
};
