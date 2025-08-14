export type Orientation = "left" | "up" | "down" | "note";

export type Block = {
  id: string;
  text: string;
  image?: string;
  content?: {
    id: string;
    text: string;
    image?: string;
  };
  count: number;
  originalCount?: number;
  orientation: Orientation;
  isFocused?: boolean;
  isSelected?: boolean;
  isSettingsVisible: boolean;
  hasImage: string;
};

export type NoteBlockProps = {
  blocks: Block[];
};

export type PreviewBlockProps = {
  blocks: Block[];
};
