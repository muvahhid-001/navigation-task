import TextareaAutosize from "react-textarea-autosize";
import type { EditableTextareaProps } from "./types";

export const EditableTextarea = ({
  value,
  onChange,
  onSave,
  canSave,
  ...props
}: EditableTextareaProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (canSave) onSave();
    }
  };

  return (
    <TextareaAutosize
      {...props}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      onClick={(e) => e.stopPropagation()}
      minRows={1}
    />
  );
};
