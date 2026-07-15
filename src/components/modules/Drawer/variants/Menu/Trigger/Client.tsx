'use client';

import { MagneticButton, MagneticButtonProps } from '@/components/input/Button/variants/Magnetic';
import { DrawerTrigger } from '@/components/modules/Drawer';

export type MenuDrawerTriggerClientProps = MagneticButtonProps;

export const MenuDrawerTriggerClient = (props: MenuDrawerTriggerClientProps) => {
  return (
    <DrawerTrigger asChild>
      <MagneticButton {...props} />
    </DrawerTrigger>
  );
};
