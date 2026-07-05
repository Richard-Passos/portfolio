'use client';

import { RefObject, useRef } from 'react';

import Slot, { SlotProps } from '@/components/misc/Slot';
import { useHoverDelay } from '@/hooks';
import { MergeProps } from '@/types';
import { setRefs } from '@/utils';

type SkillCardHoverOwnProps = {
  delay: Parameters<typeof useHoverDelay>['1'];
};

type SkillCardHoverProps = MergeProps<SkillCardHoverOwnProps, SlotProps>;

const SkillCardHover = ({ delay, ref, ...props }: SkillCardHoverProps) => {
  const innerRef = useRef<HTMLElement>(null) as RefObject<HTMLElement>;

  const isHover = useHoverDelay(innerRef, delay);

  return (
    <Slot
      data-active={isHover}
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export { SkillCardHover };
export type { SkillCardHoverProps };
