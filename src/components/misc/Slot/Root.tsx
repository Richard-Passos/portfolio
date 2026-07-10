'use client';

import { SlotProps as RadixSlotProps } from '@radix-ui/react-slot';
import { ReactNode, Ref } from 'react';

import { MergeProps } from '@/types/MergeProps';

export { Slot } from '@radix-ui/react-slot';

export type SlotAsChildProps<Props> = MergeProps<
  { asChild?: false } | { asChild: true; children: ReactNode },
  Props
>;

export type SlotProps = { ref?: Ref<HTMLSlotElement> } & RadixSlotProps;
