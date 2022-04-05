import { configureStore, combineReducers } from "@reduxjs/toolkit";

import hostReducer from "./features/host/slice";
import customerReducer from "./features/customer/slice";
import { useDispatch } from "react-redux";
import languageReducer from './features/language/slice'
//import { bookingSlice } from './features/customer/bookingSlice'

const rootReducer = combineReducers({
  customer: customerReducer,
  hosts: hostReducer,
  //booking: bookingSlice.reducer,
  language: languageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
