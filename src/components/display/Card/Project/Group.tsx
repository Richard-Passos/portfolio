'use client';

import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';

export type ProjectCardGroupProps = SlotElementProps<'ul'>;

export const ProjectCardGroupAnimation = {
  target: 'li',
  from: {
    '--y1': '0px',
    '--y2': '-192px'
  },
  to: {
    '--y1': '-192px',
    '--y2': '0px'
  },
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export const ProjectCardGroup = ({ className, ...props }: ProjectCardGroupProps) => {
  return (
    <AnimateOnScroll config={ProjectCardGroupAnimation}>
      <SlotElement
        tag='ul'
        className={cn('grid w-full gap-4 sm:grid-cols-2 sm:pt-48 lg:grid-cols-3', className)}
        {...props}
      />
    </AnimateOnScroll>
  );
};
