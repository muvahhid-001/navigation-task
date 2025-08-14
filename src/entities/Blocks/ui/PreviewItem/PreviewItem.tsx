import React from "react";
import { useDispatch } from "react-redux";
import { DotsButton } from "@/shared/ui/DotsButton/DotsButton";
import { Indicator } from "@/shared/ui/Indicator/Indicator";
import { setFocused, toggleSelected } from "@/entities/Blocks/model/blockSlice";
import TextareaAutosize from "react-textarea-autosize";
import type { PreviewItemProps } from "./types";
import styles from "./PreviewItem.module.scss";

export const PreviewItem = ({
  block,
  isSettingsVisible,
  isAnySettingsVisible,
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
    e.stopPropagation();
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (canSave) onSave();
    }
  };

  const handleMouseEnter = () => {
    if (!isAnySettingsVisible) dispatch(setFocused(block.id));
  };

  const handleClick = () => {
    if (!isSettingsVisible && !isAnySettingsVisible) {
      dispatch(toggleSelected(block.id));
    }
  };

  const handleDotsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSettings(block.id);
  };

  return (
    <div
      className={[
        styles.PreviewItem,
        styles[`orientation_${orientation}`],
        block.isFocused ? styles.focused : "",
        !isSettingsVisible && block.isSelected ? styles.selected : "",
        isSettingsVisible ? styles.settings : "",
        isSettingsVisible ? styles.editing : "",
      ].join(" ")}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
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
              className={
                orientation === "down"
                  ? styles.indicatorDown
                  : orientation === "up"
                  ? styles.indicatorTheme
                  : ""
              }
            />
          )}
        </p>
      )}

      {!isSettingsVisible && (
        <DotsButton onClick={handleDotsClick} orientation={orientation} />
      )}
    </div>
  );
};
