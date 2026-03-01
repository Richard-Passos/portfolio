import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Theme } from '@/types';

type ThemeSliceInitialState = {
  theme: Theme;
};

const initialState: ThemeSliceInitialState = {
  theme: 'light'
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    }
  }
});

export default ThemeSlice;
export const { setTheme } = ThemeSlice.actions;
export type { ThemeSliceInitialState };
