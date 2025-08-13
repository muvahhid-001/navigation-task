import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setText,
  setCount,
  setOriginalCount,
} from "@entities/Blocks/model/blockSlice";
import { selectBlocks } from "@entities/Blocks/model/blockSlice";

type Block = ReturnType<typeof selectBlocks>[number];

export const useBlockUpdater = (blocks: Block[]) => {
  const dispatch = useDispatch();
  const [countInput, setCountInput] = useState("");

  const setTextAll = useCallback(
    (text: string) => {
      blocks.forEach((block) => dispatch(setText({ id: block.id, text })));
    },
    [blocks, dispatch]
  );

  const setCountAll = useCallback(
    (value: string) => {
      if (value === "") {
        setCountInput("");
        blocks.forEach((block) => {
          dispatch(setCount({ id: block.id, count: 0 }));
          dispatch(setOriginalCount({ id: block.id, originalCount: 0 }));
        });
        return;
      }

      let num: number;
      if (value.startsWith("+")) {
        num = Number(value.slice(1));
      } else {
        num = Number(value);
      }
      if (isNaN(num)) return;
      if (num > 9999) num = 9999;

      setCountInput(value);
      blocks.forEach((block) => {
        dispatch(setCount({ id: block.id, count: num }));
        dispatch(setOriginalCount({ id: block.id, originalCount: num }));
      });
    },
    [blocks, dispatch]
  );

  return { countInput, setCountInput, setTextAll, setCountAll };
};
