import { useEffect } from "react";
import type { AppDispatch } from "@/app/store";
import { setFocused, toggleSelected } from "../model/blockSlice";
import type { Block } from "../model/types";

export const useBlockNavigation = (blocks: Block[], dispatch: AppDispatch) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const focusedIndex = blocks.findIndex((b) => b.isFocused);
      if (e.key === "ArrowDown") {
        const nextIndex = Math.min(blocks.length - 1, focusedIndex + 1);
        dispatch(setFocused(blocks[nextIndex].id));
      }
      if (e.key === "ArrowUp") {
        const prevIndex = Math.max(0, focusedIndex - 1);
        dispatch(setFocused(blocks[prevIndex].id));
      }
      if (e.key === " " && focusedIndex !== -1) {
        e.preventDefault();
        dispatch(toggleSelected(blocks[focusedIndex].id));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [blocks]);
};
