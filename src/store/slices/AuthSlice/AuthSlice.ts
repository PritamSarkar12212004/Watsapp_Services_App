import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  phone: string | null;
  token: string | null;
}

const initialState: AuthState = {
  phone: null,
  token: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (
      state,
      action: PayloadAction<{ phone: string; token: string }>,
    ) => {
      state.phone = action.payload.phone;
      state.token = action.payload.token;
    },
    authSlicelogout: state => {
      state.phone = null;
      state.token = null;
    },
  },
});

export const { setAuthData, authSlicelogout } = AuthSlice.actions;
export default AuthSlice.reducer;
