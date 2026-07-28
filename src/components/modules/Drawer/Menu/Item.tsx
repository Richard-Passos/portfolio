'use client';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { useMenuDrawerContext } from '@/contexts/MenuDrawer';

export type MenuDrawerItemProps = SlotProps;

export const MenuDrawerItem = (props: MenuDrawerItemProps) => {
  const { setOpen } = useMenuDrawerContext();

  return (
    <Slot
      data-menu-drawer-item
      {...props}
      onClick={(...args) => {
        setOpen(false);

        props.onClick?.(...args);
      }}
    />
  );
};
