'use client';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useThemeContext } from '@/hooks/contexts';

type HeaderThemeOrganismOwnProps = {};

type HeaderThemeOrganismProps = HeaderThemeOrganismOwnProps &
  Omit<SlotProps, keyof HeaderThemeOrganismOwnProps>;

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
