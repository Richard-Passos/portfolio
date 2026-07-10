import { RefObject } from 'react';

import { gsap, useGSAP } from '@/hooks/useGSAP';

export type UseMagneticOptions = {
  ref: RefObject<HTMLElement | null>;
  config?: {
    strength?: number;
    duration?: gsap.TweenValue;
    ease?: gsap.EaseString | gsap.EaseFunction;
  };
};

export const useMagnetic = (
  ref: UseMagneticOptions['ref'],
  {
    strength = 0.35,
    duration = 0.7,
    ease = 'elastic.out(1, 0.4)'
  }: UseMagneticOptions['config'] = {}
) => {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      let rect = el.getBoundingClientRect();

      const xTo = gsap.quickTo(el, 'x', { duration, ease });

      const yTo = gsap.quickTo(el, 'y', { duration, ease });

      function handleMouseEnter() {
        rect = el!.getBoundingClientRect();
      }

      function handleMouseMove(event: MouseEvent) {
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        xTo(x * strength);
        yTo(y * strength);
      }

      function handleMouseLeave() {
        xTo(0);
        yTo(0);
      }

      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    },
    { scope: ref, dependencies: [strength, duration, ease] }
  );
};
