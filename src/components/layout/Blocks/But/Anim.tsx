'use client';

import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';

import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode, useRef } from 'react';
import { ReviewTextOnScroll } from '@/components/system/Text/ReviewOnScroll';
import { Slot } from '@/components/misc/Slot';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import { setRefs } from '@/utils/setRefs';

export type ButProps = MergeProps<{ target: gsap.TweenTarget }, SectionProps>;

export const ButAnimation = {
  target: '[data-animate]',
  from: {},
  to: {
    y: 0,
    scale: 1,
    filter: 'blur(0px)'
  },
  end: 'top top'
} satisfies AnimateOnScrollConfig;

export const But = ({ target, ref, ...props }: ButProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const tween = gsap.from(target, {
        ease: 'none',
        y: 100,
        scale: 0.85,
        filter: 'blur(20px)',
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: 'bottom bottom',
          end: `+=`
        }
      });
    },
    { scope: innerRef, dependencies: [target] }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
