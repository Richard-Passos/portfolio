'use client';

import { DrawerRoot, DrawerRootProps } from '@mantine/core';
import { ReactNode } from 'react';

import BooleanProvider, { BooleanProviderProps } from '@/Providers/Boolean';
import { Portal } from '@/components/atoms';
import { PortalProps } from '@/components/atoms/Portal';
import { useUpdateEffect } from '@/hooks';
import { useBooleanContext } from '@/hooks/contexts';
import { usePathname } from '@/i18n/navigation';
import { PolymorphicRef } from '@/types';

type DrawerMoleculeOwnProps = Partial<
  Pick<DrawerRootProps, 'onClose' | 'opened'>
> & {
  ref?: PolymorphicRef<'div'>;
  portalProps?: Partial<PortalProps>;
};

type DrawerMoleculeProps = DrawerMoleculeOwnProps &
  Omit<DrawerRootProps, keyof DrawerMoleculeOwnProps>;

const DrawerMolecule = ({
  portalProps,
  withinPortal = true,
  ...props
}: DrawerMoleculeProps) => {
  const { value, setFalse } = useBooleanContext(),
    pathname = usePathname();

  const dataState = value ? 'open' : 'closed';

  useUpdateEffect(setFalse, [setFalse, pathname]);

  return (
    <Portal
      withinPortal={withinPortal}
      {...portalProps}
    >
      <DrawerRoot
        data-state={dataState}
        onClose={setFalse}
        opened={value}
        withinPortal={false}
        {...props}
      />
    </Portal>
  );
};

type DrawerWithProviderMoleculeOwnProps = {
  trigger: ReactNode;
};

type DrawerWithProviderMoleculeProps = DrawerWithProviderMoleculeOwnProps &
  Omit<
    BooleanProviderProps & DrawerMoleculeProps,
    keyof DrawerMoleculeOwnProps
  >;

const DrawerWithProviderMolecule = ({
  defaultValue,
  trigger,
  ...props
}: DrawerWithProviderMoleculeProps) => {
  return (
    <BooleanProvider defaultValue={defaultValue}>
      {trigger}

      <DrawerMolecule {...props} />
    </BooleanProvider>
  );
};

export default DrawerWithProviderMolecule;
export type { DrawerMoleculeProps, DrawerWithProviderMoleculeProps };
