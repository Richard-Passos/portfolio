'use client';

import { MergeProps } from '@/types/MergeProps';
import { SlotProps as RadixSlotProps } from '@radix-ui/react-slot';
import { ReactNode, Ref } from 'react';

export { Slot } from '@radix-ui/react-slot';

export type SlotProps = MergeProps<
  {
    ref?: Ref<HTMLSlotElement>;
    children: ReactNode;
  },
  RadixSlotProps
>;
