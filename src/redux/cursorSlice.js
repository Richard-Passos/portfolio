import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  variant: {},
  content: {},
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setVariant: (state, { payload }) => {
      state.variant = payload ?? {};
    },
    setContent: (state, { payload }) => {
      state.content = payload ?? {};
    },
  },
});

export default cursorSlice;
export const { setContent, setVariant } = cursorSlice.actions;
