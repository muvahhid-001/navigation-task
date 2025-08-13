import type { Orientation } from "@entities/Blocks/model/blockSlice";

export interface SettingsBlockProps {
  onClose: () => void;
  onSave: () => void;
  isTextChanged: boolean;
  activeSettingsId: string;
  onOrientationPreview: (id: string, orientation: Orientation) => void;
}
