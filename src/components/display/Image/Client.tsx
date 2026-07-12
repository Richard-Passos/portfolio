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

      gsap.from('img', {
        scale: 1.25,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('[data-front]', {
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
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
