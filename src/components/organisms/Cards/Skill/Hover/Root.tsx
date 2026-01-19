'use client';

import { RefObject, useRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useHoverDelay } from '@/hooks';
import { setRefs } from '@/utils';

type SkillCardHoverOrganismOwnProps = {
  delay: Parameters<typeof useHoverDelay>['1'];
};

type SkillCardHoverOrganismProps = SkillCardHoverOrganismOwnProps &
  Omit<SlotProps, keyof SkillCardHoverOrganismOwnProps>;

const SkillCardHoverOrganism = ({
  delay,
  ref,
  ...props
}: SkillCardHoverOrganismProps) => {
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

export default SkillCardHoverOrganism;
export type { SkillCardHoverOrganismProps };
