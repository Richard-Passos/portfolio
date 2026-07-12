'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type AnimateOnViewConfig = {
  target?: gsap.TweenTarget;
  trigger?: gsap.DOMTarget;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string | number | ScrollTrigger.StartEndFunc;
  end?: string | number | ScrollTrigger.StartEndFunc;
};

export type AnimateOnViewProps = MergeProps<AnimateOnViewConfig, SlotProps>;

export const AnimateOnView = ({
  ref,
  target,
  trigger,
  from = {},
  to,
  start,
  end,
  ...props
}: AnimateOnViewProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const tween = gsap.fromTo(target ?? el, from, {
        ...to,
        scrollTrigger: {
          trigger: trigger ?? el,
          start,
          end,
          toggleActions: 'play none none reverse',
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
