'use client';

import { useRef } from 'react';

import { SlotProps as MagneticContainerProps, Slot } from '@/components/misc';
import { MagneticProvider } from '@/providers';
import { setRefs } from '@/utils';

const MagneticContainer = ({ ref, ...props }: MagneticContainerProps) => {
  const innerRef = useRef<HTMLElement>(null);

  return (
    <MagneticProvider container={innerRef}>
      <Slot
        ref={setRefs(ref, innerRef)}
        {...props}
      />
    </MagneticProvider>
  );
};

export { MagneticContainer };
export type { MagneticContainerProps };
