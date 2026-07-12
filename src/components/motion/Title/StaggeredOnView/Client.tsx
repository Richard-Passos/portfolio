'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { SplitText, gsap, useGSAP } from '@/hooks/useGSAP';
import { setRefs } from '@/utils/setRefs';
import { MergeProps } from '@/types/MergeProps';

export type StaggeredTitleClientOnViewConfig = {
  from?: gsap.TweenVars;
  start?: string | number | ScrollTrigger.StartEndFunc;
  end?: string | number | ScrollTrigger.StartEndFunc;
};

export type StaggeredTitleClientOnViewProps = MergeProps<
  { type?: 'chars' | 'words' | 'lines' } & StaggeredTitleClientOnViewConfig,
  SlotProps
>;

export const StaggeredTitleClientOnView = ({
  type = 'chars',
  from,
  start = 'top 75%',
  end,
  ref,
  ...props
}: StaggeredTitleClientOnViewProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const split = SplitText.create(el, { type });

      const tween = gsap.from(split[type], {
        y: 50,
        opacity: 0,
        stagger: 0.016,
        duration: 0.6,
        ease: 'back.out(1.7)',
        ...from,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          toggleActions: 'play reverse play reverse',
          ...(from?.scrollTrigger ?? {})
        }
      });

      return () => {
        tween.kill();
        split.revert();
      };
    },
    { scope: innerRef, dependencies: [from, start, end] }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
