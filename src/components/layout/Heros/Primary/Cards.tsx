import { ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { AnimateOnView, AnimateOnViewConfig } from '@/components/motion/Animate';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type PrimaryHeroCardProps = {
  icon: ReactNode;
  title: ReactNode;
  text: ReactNode;
};

export type PrimaryHeroCardsProps = SlotElementProps<'section'>;

export const PrimaryHeroCardsAnimation = {
  target: '[data-card]',
  from: {
    y: 100,
    scale: 0.85,
    filter: 'blur(20px)'
  },
  to: {
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.7,
    ease: 'power2.out',
    stagger: {
      each: 0.08,
      from: 'center'
    }
  }
} satisfies AnimateOnViewConfig;

export const PrimaryHeroCards = ({ className, ...props }: PrimaryHeroCardsProps) => {
  return (
    <AnimateOnView config={PrimaryHeroCardsAnimation}>
      <SlotElement
        tag='section'
        className={cn(
          'relative z-10 mt-28 grid w-full max-w-7xl items-end gap-4 md:grid-cols-12',
          className
        )}
        {...props}
      />
    </AnimateOnView>
  );
};
