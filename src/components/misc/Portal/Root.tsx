'use client';

import {
  OptionalPortal,
  OptionalPortalProps as PortalRootProps
} from '@mantine/core';

import { Slot } from '@/components/misc/Slot';
import { useThemeContext } from '@/hooks/contexts';

const PortalRoot = ({
  withinPortal = true,
  children,
  ...props
}: PortalRootProps) => {
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

export { PortalRoot };
export type { PortalRootProps };
