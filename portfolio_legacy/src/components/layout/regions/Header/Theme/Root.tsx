'use client';

import { SlotProps } from '@radix-ui/react-slot';

import { Slot } from '@/components/atoms';
import { useThemeContext } from '@/hooks/contexts';

type HeaderThemeProps = SlotProps;

const HeaderTheme = (props: HeaderThemeProps) => {
  const { theme } = useThemeContext();

  return (
    <Slot
      data-theme={theme}
      {...props}
    />
  );
};

export { HeaderTheme };
export type { HeaderThemeProps };
