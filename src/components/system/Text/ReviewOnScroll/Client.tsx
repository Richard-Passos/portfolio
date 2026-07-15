'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { SplitText, gsap, useGSAP } from '@/hooks/useGSAP';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type ReviewTextOnScrollClientConfig = {
  type?: 'lines' | 'words' | 'chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string | number | ScrollTrigger.StartEndFunc;
  end?: string | number | ScrollTrigger.StartEndFunc;
};

export type ReviewTextOnScrollClientProps = MergeProps<ReviewTextOnScrollClientConfig, SlotProps>;

export const ReviewTextOnScrollClient = ({
  type = 'words',
  from,
  to,
  start = 'top 75%',
  end = 'bottom 75%',
  ref,
  ...props
}: ReviewTextOnScrollClientProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const split = SplitText.create(el, { type });

      const tween = gsap.fromTo(
        split[type],
        {
          opacity: 0.08,
          ...from
        },
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.16,
          ...to,
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
            ...(to?.scrollTrigger ?? {})
          }
        }
      );

      return () => {
        tween.kill();
      };
    },
    { scope: innerRef, dependencies: [type, from, to, start, end] }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
