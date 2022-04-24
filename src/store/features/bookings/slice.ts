import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { Booking } from '../../../@types/Booking';
import CustomerService from '../../../service/customer.service';

export const addBook = createAsyncThunk("booking/add", CustomerService.addBooking);

interface initialState {
  bookings: Booking.Info['id'][];
  status: "idle" | "loading" | "failed";
}

const initialState: initialState = {
  bookings: [],
  status: "idle",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = "idle";
        state.bookings.push(action.payload);
      })
      .addCase(addBook.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default bookingSlice.reducer
