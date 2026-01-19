'use client';

import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithRef, useRef } from 'react';

import { MagneticProvider } from '@/Providers';
import { setRefs } from '@/utils';

type MagneticContainerAtomOwnProps = {};

type MagneticContainerAtomProps = MagneticContainerAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof Slot>, keyof MagneticContainerAtomOwnProps>;

const MagneticContainerAtom = ({
  ref,
  ...props
}: MagneticContainerAtomProps) => {
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

export default MagneticContainerAtom;
export type { MagneticContainerAtomProps };
