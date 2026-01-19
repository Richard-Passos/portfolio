'use client';

import { OptionalPortal, OptionalPortalProps } from '@mantine/core';
import { Slot } from '@radix-ui/react-slot';

import { useThemeContext } from '@/hooks/contexts';

type PortalAtomOwnProps = {};

type PortalAtomProps = PortalAtomOwnProps &
  Omit<OptionalPortalProps, keyof PortalAtomOwnProps>;

const PortalAtom = ({
  withinPortal = true,
  children,
  ...props
}: PortalAtomProps) => {
  const { theme } = useThemeContext();

  return (
    <OptionalPortal
      withinPortal={withinPortal}
      {...props}
    >
      <Slot data-theme={theme}>{children}</Slot>
    </OptionalPortal>
  );
};

export default PortalAtom;
export type { PortalAtomProps };
