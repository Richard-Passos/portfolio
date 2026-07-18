'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { setRefs } from '@/utils/setRefs';
import { gsap, useGSAP } from '@/hooks/useGSAP';

export type ImageClientProps = SlotProps;

export const ImageClient = ({ ref, ...props }: ImageClientProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const tweenImg = gsap.from('img', {
        ease: 'none',
        scale: 1.1,
        duration: 0.7,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: 'top 75%',
          end: 'bottom 75%'
        }
      });

      const tweenFront = gsap.to('[data-front]', {
        ease: 'none',
        y: '100%',
        duration: 0.7,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: 'top 75%',
          end: 'bottom 75%'
        }
      });

      return () => {
        tweenImg.kill();
        tweenFront.kill();
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
