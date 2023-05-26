import { configureStore } from "@reduxjs/toolkit";
import accessSlice from "./slices/access/access.slice";
import characterSlice from "./slices/character/character.slice";

export const store = configureStore({
  reducer: {
    access: accessSlice,
    character: characterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
