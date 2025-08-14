import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Block } from "./types";

export type Orientation = "left" | "up" | "down" | "note";

const hasImage = (img: string) => img !== "" && img !== "/images/noneImage.png";

const initialState: Block[] = [
  {
    id: "block-3",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your",
    image: "/images/noneImage.png",
    count: 10,
    originalCount: 10,
    orientation: "left",
    hasImage: false,
    isFocused: false,
    isSelected: false,
    isSettingsVisible: false,
  },
  {
    id: "block-4",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in about quenchng bbb",
    image:
      "https://images.all-free-download.com/images/thumbjpg/nature_picture_flower_petal_ladybug_closeup_6930241.jpg",
    count: 100,
    originalCount: 100,
    orientation: "left",
    hasImage: true,
    isFocused: false,
    isSelected: false,
    isSettingsVisible: false,
  },
  {
    id: "block-5",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your",
    image:
      "https://images.all-free-download.com/images/thumbjpg/nature_picture_ladybug_leaf_closeup_6930245.jpg",
    count: 10,
    originalCount: 9,
    orientation: "note",
    hasImage: true,
    isFocused: false,
    isSelected: false,
    isSettingsVisible: false,
  },
  {
    id: "block-6",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital",
    image:
      "https://images.all-free-download.com/images/thumbjpg/nature_picture_flower_petal_ladybug_closeup_6930241.jpg",
    count: 0,
    originalCount: 0,
    orientation: "up",
    hasImage: true,
    isFocused: false,
    isSelected: false,
    isSettingsVisible: false,
  },
  {
    id: "block-8",
    text: "Drinking water isn't just about quenching your thirst. It plays a crucial role in maintaining the proper functing of your body a bbbbbbbbb",
    image: "/images/noneImage.png",
    count: 10,
    originalCount: 10,
    orientation: "note",
    hasImage: false,
    isFocused: false,
    isSelected: false,
    isSettingsVisible: false,
  },
];

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<{ id: string; count: number }>) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) block.count = action.payload.count;
    },
    setOriginalCount: (
      state,
      action: PayloadAction<{ id: string; originalCount: number }>
    ) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) block.originalCount = action.payload.originalCount;
    },
    setText: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) block.text = action.payload.text;
    },
    setOrientation: (
      state,
      action: PayloadAction<{ id: string; orientation: Orientation }>
    ) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) block.orientation = action.payload.orientation;
    },
    setImage: (state, action: PayloadAction<{ id: string; image: string }>) => {
      const block = state.find((b) => b.id === action.payload.id);
      if (block) {
        block.image = action.payload.image;
        block.hasImage = hasImage(action.payload.image);
      }
    },
    setFocused: (state, action: PayloadAction<string>) => {
      state.forEach((b) => {
        b.isFocused = b.id === action.payload;
      });
    },
    clearFocused: (state) => {
      state.forEach((b) => {
        b.isFocused = false;
      });
    },
    toggleSelected: (state, action: PayloadAction<string>) => {
      const block = state.find((b) => b.id === action.payload);
      if (block) block.isSelected = !block.isSelected;
    },
    resetSelected: (state) => {
      state.forEach((b) => {
        b.isSelected = false;
      });
    },
  },
});

export const {
  setCount,
  setOriginalCount,
  setText,
  setOrientation,
  setImage,
  setFocused,
  clearFocused,
  toggleSelected,
  resetSelected,
} = blocksSlice.actions;

export const selectBlocks = (state: { blocks: Block[] }) => state.blocks;
export default blocksSlice.reducer;
