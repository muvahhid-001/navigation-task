import { useBlockUpdater } from "./lib/useBlockUpdater";

export const DevControls = () => {
  const { countInput, handleTextChangeAll, handleCountChangeAll } =
    useBlockUpdater();

  return (
    <div
      style={{ display: "flex", gap: "16px", marginBottom: 20, width: "500px" }}
    >
      <div style={{ flex: 1 }}>
        <input
          type="text"
          onChange={handleTextChangeAll}
          placeholder="Новый текст для всех блоков"
          style={{
            padding: "8px",
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
          onChange={handleCountChangeAll}
          placeholder="Новое значение count"
          style={{
            padding: "8px",
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
