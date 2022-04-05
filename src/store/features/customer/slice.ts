import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Customer } from "../../../@types/Customer";
import CustomerService from "../../../service/customer.service";

export const customerLogin = createAsyncThunk(
  "customer/login",
  CustomerService.signIn
);

export const customerLogout = createAsyncThunk(
  "customer/logout",
  CustomerService.signOut
);

interface CustomerState {
  info: Customer | null;
  requireAuth: boolean;
}

const initialState: CustomerState = {
  info: CustomerService.getInfo(),
  requireAuth: false,
  // error: undefined,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    requireAuth(state) {
      state.requireAuth = true;
    },
    dismissAuth(state) {
      state.requireAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customerLogin.fulfilled, (state, action) => {
        if (action.payload !== null) state.info = action.payload;
      })
      .addCase(customerLogin.rejected, (state, action) => {
        console.error(action);
      })
      .addCase(customerLogout.fulfilled, (state) => {
        state.info = null;
      })
      .addCase(customerLogout.rejected, (state, action) => {
        console.error(action);
      });
  },
});

export const { requireAuth, dismissAuth } = customerSlice.actions;

export default customerSlice.reducer;
