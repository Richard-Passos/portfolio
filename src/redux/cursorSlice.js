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

const { setVariant, setContent } = cursorSlice.actions;

export default cursorSlice;
export { setVariant, setContent };
