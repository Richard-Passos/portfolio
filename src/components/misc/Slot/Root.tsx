'use client';

import { ark } from '@ark-ui/react/factory';
import { ComponentProps, ReactNode } from 'react';

export type SlotAsChildProps<Props> = Props &
  ({ asChild?: false } | { asChild: true; children: ReactNode });

export type SlotProps = Omit<ComponentProps<typeof ark.slot>, 'asChild'>;

export const Slot = (props: SlotProps) => {
  return (
    <ark.slot
      asChild
      {...props}
    />
  );
};
