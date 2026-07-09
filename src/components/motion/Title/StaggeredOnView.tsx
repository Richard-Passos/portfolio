'use client';

import { useRef } from 'react';
import { Slot, type SlotProps } from '@/components/misc/Slot';
import type { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';
import { gsap, useGSAP, SplitText } from '@/hooks/useGSAP';

export type StaggeredTitleOnViewProps = MergeProps<{ type: 'lines' | 'words' | 'chars' }, SlotProps>;

export const StaggeredTitleOnView = ({ type, ref, ...props }: StaggeredTitleOnViewProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(() => {
    const el = innerRef.current;
    if(!el) return;

    const split = SplitText.create(el, { type });

    const tween = gsap.from(split[type], {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      duration: 0.6,
      ease: "back.out(1.7)" 
    });

    return () => {
      tween.kill()
    }
  }, { scope: innerRef, dependencies: [type]})
 
  return <Slot ref={setRefs(ref, innerRef)} {...props}/>;
};