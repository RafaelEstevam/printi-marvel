import { createSlice } from "@reduxjs/toolkit";

export interface AccessState {
  publicKey: string;
  privateKey: string;
}

const initialState: AccessState = {
  publicKey: "",
  privateKey: "",
};

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    login: (state, action) => {
      const { payload } = action;
      state.publicKey = payload.publicKey;
      state.privateKey = payload.privateKey;
    },
  },
});

export const { login } = accessSlice.actions;

export default accessSlice.reducer;
