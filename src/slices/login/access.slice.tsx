import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'

export interface CounterState {
  publicKey: string,
  privateKey: string
}

const initialState: CounterState = {
    publicKey: '',
    privateKey: ''
}

export const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {
    login: (state, action) => {
        const {payload} = action;
        state.publicKey = payload.publicKey
        state.privateKey = payload.privateKey
    }
  }
})

export const { login } = accessSlice.actions

export default accessSlice.reducer