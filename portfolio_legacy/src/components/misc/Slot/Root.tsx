'use client';

import { Slot as SlotRoot } from '@radix-ui/react-slot';
import { ComponentProps, ReactNode } from 'react';

type SlotRootAsChildProps<Props> = Props &
  ({ asChild?: false } | { asChild: true; children: ReactNode });

type SlotRootProps = ComponentProps<typeof SlotRoot>;

export { SlotRoot };
export type { SlotRootProps, SlotRootAsChildProps };
