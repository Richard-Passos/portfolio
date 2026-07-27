'use client';

import {
  MenuTrigger as UiMenuTrigger,
  MenuTriggerProps as UiMenuTriggerProps
} from '@ark-ui/react/menu';

export type MenuTriggerProps = UiMenuTriggerProps;

export const MenuTrigger = (props: MenuTriggerProps) => {
  return (
    <UiMenuTrigger
      asChild
      {...props}
    />
  );
};
