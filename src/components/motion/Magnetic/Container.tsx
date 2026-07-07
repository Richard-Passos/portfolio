'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { MagneticProvider } from '@/contexts/Magnetic';

export type MagneticContainerProps = SlotProps;

export const MagneticContainer = ({ ref, children }: MagneticContainerProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  return (
    <MagneticProvider container={innerRef}>
      <Slot ref={ref}>{children}</Slot>
    </MagneticProvider>
  );
};
