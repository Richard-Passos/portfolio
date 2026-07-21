'use client';

import { useDispatch, useSelector } from '@/store';
import { setTheme } from '@/store/slices/theme';
import { Theme } from '@/types/Theme';
import { useEffect } from 'react';

export const useThemeContext = () => {
  const theme = useSelector((state) => state.theme.theme) as Theme;
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.add('disable-transitions');
    document.documentElement.classList.toggle('bg-body', theme === 'light');
    document.documentElement.classList.toggle('bg-body-emphasis', theme !== 'light');

    const timeout = setTimeout(() => {
      document.documentElement.classList.remove('disable-transitions');
    }, 0);

    return () => {
      clearTimeout(timeout);
      document.documentElement.classList.remove('disable-transitions');
    };
  }, [theme]);

  return {
    theme,
    setTheme: (theme: Theme) => {
      dispatch(setTheme(theme));
    }
  };
};
