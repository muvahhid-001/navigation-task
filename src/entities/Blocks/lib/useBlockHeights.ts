import { useEffect, useState } from "react";
import type { Block } from "../model/types";

type TitleRefs = React.MutableRefObject<Record<string, HTMLElement | null>>;

export const useBlockHeights = (
  blocks: Block[],
  titleRefs: TitleRefs,
  deps: React.DependencyList
): Record<string, number> => {
  const [heights, setHeights] = useState<Record<string, number>>({});

  useEffect(() => {
    const newHeights: Record<string, number> = {};
    blocks.forEach((block: Block) => {
      const el = titleRefs.current[block.id];
      if (el) {
        newHeights[block.id] = el.getBoundingClientRect().height;
      }
    });
    setHeights(newHeights);
  }, deps);

  return heights;
};
