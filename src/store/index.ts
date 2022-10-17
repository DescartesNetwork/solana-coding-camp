import { configureStore } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import languages from './languages.reducer'
import blogs from './blogs.reducer'

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: { ui, languages, blogs },
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
