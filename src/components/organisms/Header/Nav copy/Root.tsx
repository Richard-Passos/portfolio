'use client';

import { SlotProps } from '@radix-ui/react-slot';

import { Slot } from '@/components/atoms';
import { useThemeContext } from '@/hooks/contexts';

type HeaderThemeOrganismProps = SlotProps;

const HeaderThemeOrganism = (props: HeaderThemeOrganismProps) => {
  const { theme } = useThemeContext();

  return (
    <Slot
      data-theme={theme}
      {...props}
    />
  );
};

export default HeaderThemeOrganism;
export type { HeaderThemeOrganismProps };
