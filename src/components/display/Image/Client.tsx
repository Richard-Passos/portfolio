'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { setRefs } from '@/utils/setRefs';
import { gsap, useGSAP } from '@/hooks/useGSAP';

export type ImageClientProps = SlotProps;

export const ImageClient = ({ ref, ...props }: ImageClientProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = innerRef.current;
      if (!el) return;

      const onLoad = contextSafe!(() => {
        gsap.from('img', {
          scale: 1.25,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse'
          }
        });

        gsap.from('[data-front]', {
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse'
          }
        });
      });

      el.querySelector('img')?.addEventListener('load', onLoad);

      return () => {
        el.querySelector('img')?.removeEventListener('load', onLoad);
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
