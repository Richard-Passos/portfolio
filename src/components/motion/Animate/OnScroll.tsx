'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type AnimateOnScrollConfig = {
  target?: gsap.TweenTarget;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string | number | ScrollTrigger.StartEndFunc;
  end?: string | number | ScrollTrigger.StartEndFunc;
};

export type AnimateOnScrollCallback = (el: HTMLSlotElement) => void;

export type AnimateOnScrollProps = MergeProps<
  { config: AnimateOnScrollConfig | AnimateOnScrollCallback },
  SlotProps
>;

export const AnimateOnScroll = ({ config, ref, ...props }: AnimateOnScrollProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      if (typeof config === 'function') {
        return config(el);
      }

      const { target, from, to, start, end } = config ?? {};

      const tween = gsap.fromTo(target ?? el, from ?? {}, {
        ease: 'none',
        ...to,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: start ?? 'top bottom',
          end: end ?? `+=${el.offsetHeight}`,
          ...(to?.scrollTrigger ?? {})
        }
      });

      return () => {
        tween.kill();
      };
    },
    {
      scope: innerRef,
      dependencies: [config]
    }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
