import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { entries, normKey, setOrRemove } from '@/utils';

type Heights = Record<string, number>;

type HeightSliceInitialState = {
  heights: Heights;
};

const initialState: HeightSliceInitialState = {
  heights: {}
};

const heightSlice = createSlice({
  name: 'height',
  initialState,
  reducers: {
    setHeight: (state, { payload }: PayloadAction<Heights>) => {
      const heights = entries(payload).reduce(
        (obj: Heights, [key, value]) => setOrRemove(obj, normKey(key), value),
        {}
      );

      state.heights = { ...state.heights, ...heights };
    }
  }
});

export default heightSlice;
export const { setHeight } = heightSlice.actions;
export type { HeightSliceInitialState, Heights };
