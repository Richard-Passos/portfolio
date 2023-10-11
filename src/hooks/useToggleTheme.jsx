'use client';

import { useTheme } from 'next-themes';

const useToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const oppositeTheme = {
      dark: 'light',
      light: 'dark',
    };

    setTheme(oppositeTheme[theme] || 'light');
  };

  return { theme, toggleTheme };
};

export default useToggleTheme;
