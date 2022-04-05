import { createSlice } from '@reduxjs/toolkit'

interface initialState {
  language: string
  status: 'idle' | 'loading' | 'failed'
}

const initialState: initialState = {
  language: 'it',
  status: 'idle'
}

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {} = languageSlice.actions

export default languageSlice.reducer






