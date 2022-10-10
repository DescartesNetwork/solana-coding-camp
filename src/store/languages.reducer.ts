import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { DEFAULT_SYSTEM, LanguageType } from 'constant'

const NAME = 'languages'

export type LanguagesState = {
  language: LanguageType
  system: any
}

const initialState: LanguagesState = {
  language: 'en',
  system: DEFAULT_SYSTEM.en,
}

/**
 * Actions
 */

export const setLanguage = createAsyncThunk(
  `${NAME}/setLanguage`,
  async (language: LanguageType) => {
    return { language, system: DEFAULT_SYSTEM[language] }
  },
)

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      setLanguage.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
