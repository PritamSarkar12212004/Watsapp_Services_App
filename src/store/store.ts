import { configureStore } from '@reduxjs/toolkit';
import DemoSlice from './slices/demo/DemoSlice';
import AuthSlice from './slices/AuthSlice/AuthSlice';
import UserSlice from './slices/userSlice/UserSlice';
export const store = configureStore({
  reducer: {
    DemoSlice: DemoSlice,
    AuthSlice: AuthSlice,
    UserSlice: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
