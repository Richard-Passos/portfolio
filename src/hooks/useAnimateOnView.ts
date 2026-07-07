'use client';

import { RefObject } from 'react';

import { gsap, ScrollTrigger, useGSAP } from '@/hooks/useGSAP';

export type UseAnimateOnViewOptions = {
  ref: RefObject<HTMLElement | null>;
  config: {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
    start: string | number | ScrollTrigger.StartEndFunc;
  }
};

export const useAnimateOnView = (
  ref: UseAnimateOnViewOptions['ref'],
  { from, to, start }: UseAnimateOnViewOptions['config']
) => {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const tween = gsap.fromTo(el, from, {
        ...to,
        paused: true,
      });

      const trigger = ScrollTrigger.create({
        trigger: el,
        start,
        onEnter: () => tween.play(),
        onLeaveBack: () => tween.reverse(),
      });

      return () => {
        trigger.kill();
        tween.kill();
      };
    },
    {
      scope: ref,
      dependencies: [from, to, start],
    },
  );
};