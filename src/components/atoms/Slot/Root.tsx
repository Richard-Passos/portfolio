'use client';

import { Slot } from '@radix-ui/react-slot';
import React, { ComponentProps } from 'react';

type SlotAtomAsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | (({ asChild: true; children: React.ReactNode } & ComponentProps<
      typeof Slot
    >) &
      DefaultElementProps);

type SlotAtomOwnProps = {
  [key: string]: any;
};

type SlotAtomProps = SlotAtomOwnProps &
  Omit<ComponentProps<typeof Slot>, keyof SlotAtomOwnProps>;

const SlotAtom = Slot;

export default SlotAtom;
export type { SlotAtomProps, SlotAtomAsChildProps };
