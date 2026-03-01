import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Theme } from '@/types';

export type ThemeSliceState = {
  theme: Theme;
};

export const themeInitialState: ThemeSliceState = {
  theme: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: themeInitialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
