'use client';

import { useRef } from 'react';
import { Slot, type SlotProps } from '@/components/misc/Slot';
import { useAnimateOnScroll, type UseAnimateOnScrollOptions } from '@/hooks/useAnimateOnScroll';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type AnimateOnScrollProps = MergeProps<UseAnimateOnScrollOptions['config'], SlotProps>;

export const AnimateOnScroll = ({ ref, from, to, start, end, ...props }: AnimateOnScrollProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useAnimateOnScroll(innerRef, { from, to, start, end });

  return <Slot ref={setRefs(ref, innerRef)} {...props}/>;
};