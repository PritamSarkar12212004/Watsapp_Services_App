import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
  age: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  fullName: string | null;
  gender: string | null;
  profilePic: string | null;
  wpnumber: string | null;
  _id: string | null;
  refreshToken: string | null;
  accessToken: string | null;
}

const initialState: UserState = {
  age: null,
  createdAt: null,
  updatedAt: null,
  fullName: null,
  gender: null,
  profilePic: null,
  wpnumber: null,
  _id: null,
  refreshToken: null,
  accessToken: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<number | string | any>) => {
      state._id = action.payload._id;
      state.age = action.payload.age;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.fullName = action.payload.fullName;
      state.gender = action.payload.gender;
      state.profilePic = action.payload.profilePic;
      state.wpnumber = action.payload.wpnumber;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    userSliceLogOut: state => {
      state._id = null;
      state.age = null;
      state.createdAt = null;
      state.updatedAt = null;
      state.fullName = null;
      state.gender = null;
      state.profilePic = null;
      state.wpnumber = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setUserData, userSliceLogOut } = UserSlice.actions;
export default UserSlice.reducer;
