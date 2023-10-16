import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  variant: {},
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setVariant: (state, { payload }) => {
      state.variant = payload ?? {};
    },
  },
});

const { setVariant } = cursorSlice.actions;

export default cursorSlice;
export { setVariant };
