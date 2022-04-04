import { createSlice } from '@reduxjs/toolkit'
import { Booking } from '../../../@types/Booking';

const initialState = {
  booking: Booking.Status
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {}
});

export const {} = bookingSlice.actions

export default bookingSlice.reducer
