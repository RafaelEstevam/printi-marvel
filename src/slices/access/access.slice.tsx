import { createSlice } from "@reduxjs/toolkit";

const localStorageState =
  localStorage.getItem("access") !== "undefined" &&
  localStorage.getItem("access");

export interface AccessState {
  publicKey: string;
  privateKey: string;
  hash: string;
}

const initialState = localStorageState
  ? JSON.parse(localStorageState)
  : { publicKey: "", privateKey: "", hash: "" };

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    login: (state, action) => {
      const { payload } = action;
      localStorage.setItem("access", JSON.stringify(payload));
      state.publicKey = payload.publicKey;
      state.privateKey = payload.privateKey;
      state.hash = payload.hash;
    },
  },
});

export const { login } = accessSlice.actions;

export default accessSlice.reducer;
