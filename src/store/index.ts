import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { hostsSlice } from './features/host/hostSlice'
import { authSlice } from './features/customer/authSlice'
//import { languageSlice } from './features/language/languageSlice'
//import { bookingSlice } from './features/customer/bookingSlice'


const rootReducer = combineReducers({
  auth: authSlice.reducer,
  hosts: hostsSlice.reducer,
  //booking: bookingSlice.reducer,
  //language: languageSlice,
})

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
