'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc';
import { MagneticProvider } from '@/contexts';
import { setRefs } from '@/utils';

export type MagneticContainerProps = SlotProps;

export const MagneticContainer = ({ ref, ...props }: MagneticContainerProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  return (
    <MagneticProvider container={innerRef}>
      <Slot
        ref={setRefs(ref, innerRef)}
        {...props}
      />
    </MagneticProvider>
  );
};
