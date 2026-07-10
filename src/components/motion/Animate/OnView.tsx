'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { ScrollTrigger, gsap, useGSAP } from '@/hooks/useGSAP';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type AnimateOnViewConfig = {
  target?: gsap.TweenTarget;
  trigger?: gsap.DOMTarget;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrollTrigger?: ScrollTrigger.StaticVars;
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
  scrollTrigger,
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
        paused: true,
        ...to
      });

      const scroll_tween = ScrollTrigger.create({
        trigger: trigger ?? el,
        start,
        end,
        ...scrollTrigger,
        onEnter: (...args) => {
          tween.play();
          scrollTrigger?.onEnter?.(...args);
        },
        onLeaveBack: (...args) => {
          tween.reverse();
          scrollTrigger?.onLeaveBack?.(...args);
        }
      });

      return () => {
        tween.kill();
        scroll_tween.kill();
      };
    },
    {
      scope: innerRef,
      dependencies: [target, trigger, from, to, scrollTrigger, start, end]
    }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
