'use client';

import { useRef } from 'react';
import { Slot, type SlotProps } from '@/components/misc/Slot';
import { useAnimateOnView, type UseAnimateOnViewOptions } from '@/hooks/useAnimateOnView';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type AnimateOnViewProps = MergeProps<UseAnimateOnViewOptions['config'], SlotProps>;

export const AnimateOnView = ({ ref, from, to, start, ...props }: AnimateOnViewProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useAnimateOnView(innerRef, { from, to, start });

  return <Slot ref={setRefs(ref, innerRef)} {...props}/>;
};