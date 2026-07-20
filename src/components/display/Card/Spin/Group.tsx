'use client';

import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { AnimateOnScroll } from '@/components/motion/Animate';
import { gsap } from '@/hooks/useGSAP';

export type SpinCardGroupProps = SlotElementProps<'ul'>;

export const SpinCardGroup = ({ className, ...props }: SpinCardGroupProps) => {
  return (
    <AnimateOnScroll
      config={{
        target: 'li',
        start: 'top 85%',
        end: 'center center',
        from: {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotation: () => gsap.utils.random(-10, 10)
        },
        to: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          stagger: { amount: 0.8, from: 'random' },
          ease: 'back.out(1.4)'
        }
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
