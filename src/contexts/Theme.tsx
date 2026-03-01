'use client';

import { useMemo } from 'react';

import { useDispatch, useSelector } from '@/store';
import { setTheme } from '@/store/slices/theme';
import { Theme } from '@/types';

export const useThemeContext = () => {
  const { theme } = useSelector((data) => data.theme),
    dispatch = useDispatch();

  const context = useMemo(
    () => ({ theme, setTheme: (t: Theme) => dispatch(setTheme(t)) }),
    [theme, dispatch]
  );

  return context;
};
