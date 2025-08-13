import { useState, useEffect } from "react";
import type { FC } from "react";
import styles from "./SettingsBlock.module.scss";
import SelectView from "./SelectView";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBlocks,
  setOrientation,
} from "@entities/Blocks/model/blockSlice";
import { orientationMapIcons } from "./lib/constants";
import type { Orientation } from "@entities/Blocks/model/blockSlice";
import type { SettingsBlockProps } from "./types";

const SettingsBlock: FC<SettingsBlockProps> = ({
  onClose,
  onSave,
  isTextChanged,
  activeSettingsId,
  onOrientationPreview,
}) => {
  const dispatch = useDispatch();
  const [showSelectView, setShowSelectView] = useState(false);
  const blocks = useSelector(selectBlocks);
  const activeBlock = blocks.find((b) => b.id === activeSettingsId);
  const [localOrientation, setLocalOrientation] = useState<Orientation>(
    activeBlock?.orientation ?? "left"
  );

  useEffect(() => {
    onOrientationPreview(activeSettingsId, localOrientation);
  }, [localOrientation]);

  const currentImage =
    orientationMapIcons[localOrientation as keyof typeof orientationMapIcons];

  const toggleSelectView = () => {
    setShowSelectView((prev) => !prev);
  };

  const handleSelect = () => {
    setShowSelectView(false);
  };

  const handleSave = () => {
    if (localOrientation !== activeBlock?.orientation) {
      dispatch(
        setOrientation({ id: activeSettingsId, orientation: localOrientation })
      );
    }
    onSave();
  };

  return (
    <aside className={styles.aside}>
      {showSelectView && (
        <SelectView
          currentOrientation={localOrientation}
          onSelect={handleSelect}
          onOrientationSelect={setLocalOrientation}
        />
      )}
      <div className={styles.asideContent}>
        <button className={styles.close} onClick={onClose}>
          <img src="/images/close.svg" alt="Закрыть" />
        </button>
        <div className={styles.asideBlock}>
          <button className={styles.select} onClick={toggleSelectView}>
            <img
              src={currentImage}
              alt="Выбрать Макет"
              className={
                localOrientation === "left"
                  ? styles.imageLeft
                  : styles.imageDefault
              }
            />
          </button>
          <button
            className={`${styles.save} ${isTextChanged ? styles.active : ""}`}
            onClick={handleSave}
            disabled={!isTextChanged}
          >
            <img src="/images/arrow.svg" alt="Сохранить" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SettingsBlock;
