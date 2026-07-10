'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { useMagneticContext } from '@/contexts/Magnetic';
import { useMagnetic, UseMagneticOptions } from '@/hooks/useMagnetic';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { setRefs } from '@/utils/setRefs';

export type MagneticProps = MergeProps<
  UseMagneticOptions['config'],
  SlotProps
>;

export const Magnetic = ({ ref, strength, duration, ease, className, ...props }: MagneticProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);
  const { container } = useMagneticContext();

  useMagnetic(container ?? innerRef, { strength, duration, ease })

  return <Slot ref={setRefs(ref, innerRef)} className={cn('will-change-transform', className)} {...props}/>;
}