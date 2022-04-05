import { createSlice } from '@reduxjs/toolkit'
import { Booking } from '../../../@types/Booking';

const initialState: {bookings: Booking.Info[]} = {
  bookings: []
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {}
});

export const {} = bookingSlice.actions

export default bookingSlice.reducer
