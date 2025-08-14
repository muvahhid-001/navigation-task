import type { Block, Orientation } from "@/entities/Blocks/model/types";

export interface PreviewItemProps {
  block: Block;
  isSettingsVisible: boolean;
  isAnySettingsVisible: boolean;
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
