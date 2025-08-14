import type { TextareaAutosizeProps } from "react-textarea-autosize";

export interface EditableTextareaProps
  extends Omit<TextareaAutosizeProps, "onChange" | "value"> {
  value: string;
  onChange: (val: string) => void;
  onSave: () => void;
  canSave: boolean;
}
