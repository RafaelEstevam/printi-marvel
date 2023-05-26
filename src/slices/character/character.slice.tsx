import { createSlice } from "@reduxjs/toolkit";

export interface Character {
  id: number;
}

const initialState: Character = {
  id: parseInt(localStorage.getItem("characterId")) || 1010354,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    getCaracter: (state, action) => {
      const { payload } = action;
      localStorage.setItem("characterId", payload);
      state.id = payload;
    },
  },
});

export const { getCaracter } = characterSlice.actions;

export default characterSlice.reducer;
