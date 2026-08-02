'use client';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import { useRef } from 'react';
import { setRefs } from '@/utils/setRefs';
import { MergeProps } from '@/types/MergeProps';

export type MouseTrailContainerProps = MergeProps<{ step?: number }, SlotProps>;

export const MouseTrailContainer = ({ step = 100, ref, ...props }: MouseTrailContainerProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = innerRef.current;
      if (!el || !contextSafe) return;

      let lastY = 0;
      let lastX = 0;
      let index = 0;
      const nodes = el.querySelectorAll('[data-trail-item]');

      const spawn = (x: number, y: number) => {
        const node = nodes[index];
        if (!node) return;

        index = (index + 1) % nodes.length;

        gsap.killTweensOf(node);

        gsap.set(node, {
          x,
          y,
          scale: 1,
          opacity: 1,
          rotation: gsap.utils.random(-45, 45)
        });

        gsap.to(node, {
          scale: 0.5,
          opacity: 0,
          rotation: `+=${90}`,
          delay: 0.4,
          duration: 0.8,
          ease: 'power2.out'
        });
      };

      const move = contextSafe(({ clientX, clientY }: PointerEvent) => {
        const dx = clientX - lastX;
        const dy = clientY - lastY;

        if (Math.hypot(dx, dy) < step) return;

        lastX = clientX;
        lastY = clientY;
        const rect = el.getBoundingClientRect();

        spawn(clientX - rect.left, clientY - rect.top);
      });

      el.addEventListener('pointermove', move);

      return () => {
        el.removeEventListener('pointermove', move);
      };
    },
    { scope: innerRef, dependencies: [step] }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
