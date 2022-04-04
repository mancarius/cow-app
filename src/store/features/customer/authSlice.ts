import { 
  createSlice, 
  createAsyncThunk,
  SerializedError,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AuthProvider } from '../../../@types/AuthProvider';
import { signInWithFacebook, signInWithGoogle } from '../../../configs/firebase';

// const login = createAsyncThunk(
//   'auth/login',
//   async () => {
//       try {
//           return []
//       } catch (error) {
//           throw error 
//       }
//   }
// )

export interface AuthState {
  userName?: string | null;
  userEmail?: string | null;
  authenticated?: boolean;
  // error?: SerializedError
}

const initialState: AuthState = {
  userName: null,
  userEmail: null,
  authenticated: false,
  // error: undefined,
}

interface Payload {
  displayName?: string | null;
  email?: string | null;
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName === action.payload.userName
      state.userEmail === action.payload.userEmail
    },
    setUserLogoutState: (state) => {
      state.userName === null
      state.userEmail === null
    }
  },
  // extraReducers: builder => {
  //   builder.addCase(login.fulfilled, (state,  action) => {
  //     state.displayName = action.payload.displayName;
  //     state.email = action.payload.email;
  //     state.authenticated = true;
  //   });
  //   builder.addCase(login.rejected, (state, action) => {
  //     state.error = action.error;
  //   });
  //   builder.addCase(logout.fulfilled, state => {
  //     state.authenticated = false;
  //     state.displayName = initialState.displayName;
  //     state.email = initialState.email;
  //   });
  //   builder.addCase(logout.rejected, (state, action) => {
  //     state.error = action.error;
  //   });
  // },
});


export const {
  setActiveUser,
  setUserLogoutState
} = authSlice.actions

// export const selectUserName = state => state.user.userName
// export const selectUserEmail = state => state.user.userEmail


export default authSlice.reducer




// login(state, {payload}: PayloadAction<AuthProvider>) {
//   return payload === AuthProvider.google ? signInWithGoogle : signInWithFacebook;
// },
// logout(state, action:PayloadAction<any>) {

// },


