import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  variant: {},
  variantsDefault: {},
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setVariant: (state, { payload }) => {
      state.variant = payload ?? {};
    },
    setVariantsDefault: (state, { payload }) => {
      state.variantsDefault = payload ?? {};
    },
  },
});

const { setVariant, setVariantsDefault } = cursorSlice.actions;

export default cursorSlice;
export { setVariant, setVariantsDefault };
