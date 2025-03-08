import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from "./features/counterSlice";
import userReducer from './reducer/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
