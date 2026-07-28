'use client';

import {
  DrawerTrigger as UiDrawerTrigger,
  DrawerTriggerProps as UiDrawerTriggerProps
} from '@ark-ui/react/drawer';

export type DrawerTriggerProps = UiDrawerTriggerProps;

export const DrawerTrigger = (props: DrawerTriggerProps) => {
  return (
    <UiDrawerTrigger
      asChild
      {...props}
    />
  );
};
