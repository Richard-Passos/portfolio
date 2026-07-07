'use client';

import { RefObject } from 'react';

import { gsap, useGSAP } from '@/hooks/useGSAP';

export type UseAnimateOnScrollOptions = {
  ref: RefObject<HTMLElement | null>;
  config: {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    start?: string | number | ScrollTrigger.StartEndFunc;
    end?: string | number | ScrollTrigger.StartEndFunc
  }
};

export const useAnimateOnScroll = (
  ref: UseAnimateOnScrollOptions['ref'],
  {
    from,
    to,
    start = 'top bottom',
    end = 'bottom top'
  }: UseAnimateOnScrollOptions['config']
) => {
  useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const tween = gsap.fromTo(el, from, {
        ...to,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true,
        },
      });

      return () => {
        tween.kill();
      };
    },
    {
      scope: ref,
      dependencies: [from, to, start, end],
    },
  );
};