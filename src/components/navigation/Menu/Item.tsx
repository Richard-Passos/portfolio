'use client';

import { MenuItem as UiMenuItem, MenuItemProps as UiMenuItemProps } from '@ark-ui/react/menu';

export type MenuItemProps = UiMenuItemProps;

export const MenuItem = (props: MenuItemProps) => {
  return (
    <UiMenuItem
      asChild
      {...props}
    />
  );
};
