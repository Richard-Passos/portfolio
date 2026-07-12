'use client';

import { useDispatch, useSelector } from '@/store';
import { setTheme } from '@/store/slices/theme';
import { Theme } from '@/types/Theme';
import { useEffect } from 'react';

export const useThemeContext = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add('disable-transitions');

    const timeout = setTimeout(() => {
      document.body.classList.remove('disable-transitions');
    }, 0);

    return () => {
      clearTimeout(timeout);
      document.body.classList.remove('disable-transitions');
    };
  }, [theme]);

  return {
    theme,
    setTheme: (theme: Theme) => {
      dispatch(setTheme(theme));
    }
  };
};
