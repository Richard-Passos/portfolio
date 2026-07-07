'use client';

import { useThemeContext } from '@/contexts/Theme';

import { Slot, SlotProps } from '../Slot';

export type ThemeProps = SlotProps;

export const Theme = (props: ThemeProps) => {
  const { theme } = useThemeContext();

  return (
    <Slot
      data-theme={theme}
      {...props}
    />
  );
};
