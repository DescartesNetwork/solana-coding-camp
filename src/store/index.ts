import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'

import ui from './ui.reducer'
import languages from './languages.reducer'

const store = configureStore({
  middleware,
  reducer: { ui, languages },
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
