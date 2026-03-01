import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type HeightSliceState = {
  height: number;
};

export const heightInitialState: HeightSliceState = {
  height: 0
};

export const heightSlice = createSlice({
  name: 'height',
  initialState: heightInitialState,
  reducers: {
    setHeight: (state, { payload }: PayloadAction<number>) => {
      state.height = payload;
    }
  }
});

export const { setHeight } = heightSlice.actions;
