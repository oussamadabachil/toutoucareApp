import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { email: null, places: [] },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getEmail: (state, action) => {
      state.value.email = action.payload;
    },
  },
});

export const { getEmail} = userSlice.actions;
export default userSlice.reducer;