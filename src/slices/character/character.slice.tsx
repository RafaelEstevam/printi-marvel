import { createSlice } from "@reduxjs/toolkit";

export interface Character {
  id: number;
}

const initialState: Character = {
  id: 0,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    getCaracter: (state, action) => {
      const { payload } = action;
      state.id = payload.id;
    },
  },
});

export const { getCaracter } = characterSlice.actions;

export default characterSlice.reducer;
