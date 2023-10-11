'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider = (props) => {
  return (
    <NextThemeProvider
      attribute='class'
      enableSystem={false}
      {...props}
    />
  );
};

export default ThemeProvider;
