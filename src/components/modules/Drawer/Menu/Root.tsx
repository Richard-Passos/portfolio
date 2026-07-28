'use client';

import { Drawer, DrawerProps } from '@/components/modules/Drawer';
import { MenuDrawerProvider, useMenuDrawerContext } from '@/contexts/MenuDrawer';

export type MenuDrawerProps = DrawerProps;

const MenuDrawerRoot = (props: MenuDrawerProps) => {
  const { open, setOpen } = useMenuDrawerContext();

  return (
    <Drawer
      open={open}
      modal={false}
      trapFocus={false}
      swipeDirection='end'
      {...props}
      onOpenChange={(ev) => {
        setOpen(ev.open);

        props.onOpenChange?.(ev);
      }}
    />
  );
};

export const MenuDrawer = (props: MenuDrawerProps) => {
  return (
    <MenuDrawerProvider>
      <MenuDrawerRoot {...props} />
    </MenuDrawerProvider>
  );
};
