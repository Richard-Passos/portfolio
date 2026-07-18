'use client';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { useRef } from 'react';
import { setRefs } from '@/utils/setRefs';
import { gsap, useGSAP } from '@/hooks/useGSAP';

export type FooterAnimationProps = SlotProps;

export const FooterAnimation = ({ ref, ...props }: FooterAnimationProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const tween = gsap.from(el, {
        ease: 'none',
        y: '-50%',
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: 'center bottom',
          end: `+=${el.offsetHeight}`
        }
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
