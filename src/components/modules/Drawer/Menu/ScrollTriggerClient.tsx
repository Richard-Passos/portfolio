'use client';

import { DrawerTrigger } from '@/components/modules/Drawer/Trigger';
import { MagneticButton, MagneticButtonProps } from '@/components/input/Button/Magnetic';

export type MenuDrawerScrollTriggerClientProps = MagneticButtonProps;

export const MenuDrawerScrollTriggerClient = (props: MenuDrawerScrollTriggerClientProps) => {
  return (
    <DrawerTrigger>
      <MagneticButton {...props} />
    </DrawerTrigger>
  );
};
