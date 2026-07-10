'use client';

import { Ref, ReactNode } from 'react';
import { MergeProps } from '@/types/MergeProps';

import { SlotProps as RadixSlotProps } from '@radix-ui/react-slot';
export { Slot } from '@radix-ui/react-slot';

export type SlotAsChildProps<Props> = MergeProps<
  ({ asChild?: false } | { asChild: true; children: ReactNode }), 
  Props
>;

export type SlotProps = { ref?: Ref<HTMLSlotElement> } & RadixSlotProps;