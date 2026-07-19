'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { useHoverDelay } from '@/hooks/useHoverDelay';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type SpinCardHoverProps = MergeProps<
  { delay?: Parameters<typeof useHoverDelay>['1'] },
  SlotProps
>;

export const SpinCardHover = ({ delay = 500, ref, ...props }: SpinCardHoverProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);
  const isHover = useHoverDelay(innerRef, delay);

  return (
    <Slot
      data-active={isHover ? true : undefined}
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
