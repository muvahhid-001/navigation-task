import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { usePreviewFrame } from "../../lib/usePreviewFrame";
import { useBlockNavigation } from "@/entities/Blocks/lib/useBlockNavigation";
import { useBlockHeights } from "@/entities/Blocks/lib/useBlockHeights";
import SettingsBlock from "../../../SettingsBlock/SettingsBlock";
import { PreviewItem } from "./PreviewItem";
import type { PreviewBlockProps, Block } from "@/entities/Blocks/model/types";
import styles from "./PreviewFrame.module.scss";

export const PreviewFrame = ({ blocks }: PreviewBlockProps) => {
  const dispatch = useDispatch();
  const {
    activeSettingsId,
    draftText,
    toggleSettings,
    handleTextChange,
    handleSaveSettings,
    handleCloseSettings,
    textareaRefs,
    previewOrientations,
    handleOrientationPreview,
  } = usePreviewFrame({ blocks });

  const titleRefs = useRef<Record<string, HTMLElement | null>>({});
  const heights = useBlockHeights(blocks, titleRefs, [
    blocks,
    draftText,
    activeSettingsId,
  ]);
  useBlockNavigation(blocks, dispatch);

  return (
    <div className={styles.PreviewFrameList}>
      {blocks.map((block: Block) => {
        const isChanged =
          block.originalCount !== undefined &&
          block.count !== block.originalCount;
        const isSettingsVisible = activeSettingsId.includes(block.id);
        const currentText = draftText[block.id]?.trim() ?? "";
        const canSave = currentText.length > 0;
        const orientation = previewOrientations[block.id] ?? block.orientation;

        return (
          <React.Fragment key={block.id}>
            {isSettingsVisible && (
              <SettingsBlock
                onClose={() => handleCloseSettings(block.id)}
                onSave={handleSaveSettings}
                isTextChanged={canSave}
                activeSettingsId={block.id}
                onOrientationPreview={handleOrientationPreview}
              />
            )}
            <PreviewItem
              block={block}
              isSettingsVisible={isSettingsVisible}
              orientation={orientation}
              isChanged={isChanged}
              canSave={canSave}
              currentText={currentText}
              height={heights[block.id] ?? 0}
              titleRef={(el) => {
                titleRefs.current[block.id] = el;
              }}
              textareaRef={(el) => {
                textareaRefs.current[block.id] = el;
              }}
              onTextChange={handleTextChange}
              onSave={handleSaveSettings}
              onToggleSettings={toggleSettings}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
