import blocksReducer, {
  setCount,
  toggleSelected,
  setImage,
} from "../blockSlice";
import type { Frame } from "../blockSlice";

describe("blocks slice", () => {
  let initialState: Frame[];

  beforeEach(() => {
    initialState = [
      {
        id: "block-1",
        text: "Text",
        count: 1,
        originalCount: 1,
        orientation: "left",
        hasImage: false,
        isFocused: false,
        isSelected: false,
      },
    ];
  });

  it("should handle setCount", () => {
    const nextState = blocksReducer(
      initialState,
      setCount({ id: "block-1", count: 5 })
    );
    expect(nextState[0].count).toBe(5);
  });

  it("should toggle selected", () => {
    const nextState = blocksReducer(initialState, toggleSelected("block-1"));
    expect(nextState[0].isSelected).toBe(true);
  });

  it("should set image and update hasImage", () => {
    const nextState = blocksReducer(
      initialState,
      setImage({ id: "block-1", image: "image.png" })
    );
    expect(nextState[0].image).toBe("image.png");
    expect(nextState[0].hasImage).toBe(true);
  });
});
