'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { SplitText, gsap, useGSAP } from '@/hooks/useGSAP';
import { setRefs } from '@/utils/setRefs';

export type StaggeredTitleOnViewProps = SlotProps;

export const StaggeredTitleOnView = ({ ref, ...props }: StaggeredTitleOnViewProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const split = SplitText.create(el, { type: 'chars' });

      const tween = gsap.from(split.chars, {
        y: 50,
        opacity: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });

      return () => {
        tween.kill();
      };
    },
    { scope: innerRef }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
