import React from "react";
import { useDispatch } from "react-redux";
import { DotsButton } from "@/shared/ui/DotsButton/DotsButton";
import { Indicator } from "@/shared/ui/Indicator/Indicator";
import { setFocused, toggleSelected } from "@/entities/Blocks/model/blockSlice";
import TextareaAutosize from "react-textarea-autosize";
import type { Block, Orientation } from "@/entities/Blocks/model/types";
import styles from "./PreviewItem.module.scss";

interface PreviewItemProps {
  block: Block;
  isSettingsVisible: boolean;
  orientation: Orientation;
  isChanged: boolean;
  canSave: boolean;
  currentText: string;
  height: number;
  titleRef: (el: HTMLElement | null) => void;
  textareaRef: (el: HTMLTextAreaElement | null) => void;
  onTextChange: (id: string, value: string) => void;
  onSave: () => void;
  onToggleSettings: (id: string) => void;
}

export const PreviewItem = ({
  block,
  isSettingsVisible,
  orientation,
  isChanged,
  canSave,
  currentText,
  height,
  titleRef,
  textareaRef,
  onTextChange,
  onSave,
  onToggleSettings,
}: PreviewItemProps) => {
  const dispatch = useDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (canSave) onSave();
    }
  };

  return (
    <div
      className={`${styles.PreviewItem} ${
        styles[`orientation_${orientation}`]
      } ${block.isFocused ? styles.focused : ""} ${
        block.isSelected ? styles.selected : ""
      } ${isSettingsVisible ? styles.settings : ""}`}
      onMouseEnter={() => dispatch(setFocused(block.id))}
      onClick={() => dispatch(toggleSelected(block.id))}
    >
      {["up", "left", "note", "down"].includes(orientation) &&
        block.image?.trim() && (
          <img src={block.image} alt="Фото Заметки" className={styles.image} />
        )}
      {isSettingsVisible ? (
        <TextareaAutosize
          name={`text-${block.id}`}
          ref={textareaRef}
          className={styles.editableTextArea}
          value={currentText}
          placeholder="Напишите вашу идею!"
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onTextChange(block.id, e.target.value)}
          onKeyDown={handleKeyDown}
          minRows={1}
        />
      ) : (
        <p className={styles.title} ref={titleRef}>
          {block.text.trim() !== "" ? (
            block.text
          ) : (
            <span style={{ color: "#b7b7b7ab" }}>Напишите вашу идею!</span>
          )}
          {!isSettingsVisible && (
            <Indicator
              count={block.count}
              isActive={isChanged}
              isFocused={block.isFocused}
              isSelected={block.isSelected}
              orientation={orientation}
              height={height}
              className={`${
                orientation === "down"
                  ? styles.indicatorDown
                  : orientation === "up"
                  ? styles.indicatorTheme
                  : ""
              }`}
            />
          )}
        </p>
      )}
      {!isSettingsVisible && (
        <DotsButton
          onClick={(e) => {
            e.stopPropagation();
            onToggleSettings(block.id);
          }}
          orientation={orientation}
        />
      )}
    </div>
  );
};
