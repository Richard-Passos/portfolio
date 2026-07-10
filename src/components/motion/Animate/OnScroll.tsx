'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type AnimateOnScrollConfig = {
  target?: gsap.TweenTarget;
  trigger?: gsap.DOMTarget;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string | number | ScrollTrigger.StartEndFunc;
  end?: string | number | ScrollTrigger.StartEndFunc;
};

export type AnimateOnScrollProps = MergeProps<AnimateOnScrollConfig, SlotProps>;

export const AnimateOnScroll = ({
  ref,
  target,
  trigger,
  from,
  to,
  start = 'top bottom',
  end = 'bottom top',
  ...props
}: AnimateOnScrollProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const tween = gsap.fromTo(target ?? el, from, {
        ease: 'none',
        ...to,
        scrollTrigger: {
          trigger: trigger ?? el,
          scrub: true,
          start,
          end,
          ...(to?.scrollTrigger ?? {})
        }
      });

      return () => {
        tween.kill();
      };
    },
    {
      scope: innerRef,
      dependencies: [target, trigger, from, to, start, end]
    }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
