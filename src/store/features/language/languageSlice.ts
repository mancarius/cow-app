import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const setLanguage = createAsyncThunk(
  'language/setLanguage',
  async (language, thunkAPI) => {
      try {
          return []
      } catch (error) {
          throw error 
      }
  }
)

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
  extraReducers: (builder) => {
    builder
        .addCase(setLanguage.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(setLanguage.fulfilled, (state, action) => {
            state.status = 'idle';
            //state.language = action.payload;
        })
        .addCase(setLanguage.rejected, (state) => {
            state.status = 'failed';
        });
} 
});

export const {} = languageSlice.actions

export default languageSlice.reducer






