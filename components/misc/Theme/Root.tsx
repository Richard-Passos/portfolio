'use client';

import { Slot, SlotProps } from '@/components/misc';
import { useThemeContext } from '@/contexts';

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
