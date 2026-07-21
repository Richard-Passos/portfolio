'use client';

import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { AnimateOnScroll } from '@/components/motion/Animate';
import { gsap } from '@/hooks/useGSAP';

export type SpinCardGroupProps = SlotElementProps<'ul'>;

export const SpinCardGroup = ({ className, ...props }: SpinCardGroupProps) => {
  return (
    <AnimateOnScroll
      config={(el) => {
        gsap.from('li', {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotation: () => gsap.utils.random(-10, 10),
          stagger: { amount: 0.8, from: 'random' },
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: `+=${Math.min(el.offsetHeight, window.innerHeight) * 0.75}`,
            scrub: true
          }
        });
      }}
    >
      <SlotElement
        tag='ul'
        className={cn('flex w-full flex-wrap justify-center', className)}
        {...props}
      />
    </AnimateOnScroll>
  );
};
