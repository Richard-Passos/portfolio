'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';
import { AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';

export type AnimateOnViewConfig = {
  target?: gsap.TweenTarget;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string | number | ScrollTrigger.StartEndFunc;
  end?: string | number | ScrollTrigger.StartEndFunc;
};

export type AnimateOnViewCallback = (el: HTMLSlotElement) => () => void;

export type AnimateOnViewProps = MergeProps<
  { config: AnimateOnScrollConfig | AnimateOnViewCallback },
  SlotProps
>;

export const AnimateOnView = ({ config, ref, ...props }: AnimateOnViewProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      if (typeof config === 'function') {
        config(el);
        return;
      }

      const { target, from = {}, to, start, end } = config ?? {};

      gsap.fromTo(target ?? el, from, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          toggleActions: 'play none none reverse',
          ...(to?.scrollTrigger ?? {})
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
