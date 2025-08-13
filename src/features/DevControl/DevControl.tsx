import { useAppSelector } from "@/shared/hooks";
import { selectBlocks } from "@entities/Blocks/model/blockSlice";
import { useBlockUpdater } from "./hooks/useBlockUpdater";

export const DevControls = () => {
  const blocks = useAppSelector(selectBlocks);
  const { countInput, setTextAll, setCountAll } = useBlockUpdater(blocks);

  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 20, width: 500 }}>
      <div style={{ flex: 1 }}>
        <input
          type="text"
          onChange={(e) => setTextAll(e.target.value)}
          placeholder="Новый текст для всех блоков"
          style={{
            padding: 8,
            width: "100%",
            borderColor: "#00c3ddff",
            borderRadius: "1rem",
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <input
          type="text"
          value={countInput}
          onChange={(e) => setCountAll(e.target.value)}
          placeholder="Новое значение count"
          style={{
            padding: 8,
            marginLeft: "1rem",
            width: "100%",
            borderColor: "#00c3ddff",
            borderRadius: "1rem",
          }}
        />
      </div>
    </div>
  );
};
