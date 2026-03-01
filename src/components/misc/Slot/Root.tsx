'use client';

import { ark } from '@ark-ui/react/factory';
import { ComponentProps, ReactNode } from 'react';

export type SlotAsChildProps<Props> = Props &
  ({ asChild?: false } | { asChild: true; children: ReactNode });

export type SlotProps = ComponentProps<typeof Slot>;

export const Slot = ark.slot;
