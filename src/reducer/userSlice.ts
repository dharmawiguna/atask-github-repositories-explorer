import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  login: string;
  avatar_url: string;
  active?: number;
}

interface UserState {
  users: User[];
}

const storedUsers = localStorage.getItem('users');
const initialState: UserState = {
  users: storedUsers ? JSON.parse(storedUsers) : [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    clearUsers: (state) => {
      state.users = [];
      localStorage.removeItem('users');
    },
  },
});

export const { setUsers, clearUsers } = userSlice.actions;
export default userSlice.reducer;
