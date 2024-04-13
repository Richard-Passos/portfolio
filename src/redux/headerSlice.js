import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  height: 0,
  theme: 'dark',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderHeight: (state, { payload }) => {
      state.height = payload;
    },
    setHeaderTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export default headerSlice;
export const { setHeaderHeight, setHeaderTheme } = headerSlice.actions;
