'use client';

import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';

export type ProjectCardGalleryProps = SlotElementProps<'ul'>;

export const ProjectCardGalleryAnimation = {
  target: 'li',
  from: {
    y: (i) => [0, -256][i % 2] ?? 0
  },
  to: {
    y: (i) => [-128, 0][i % 2] ?? 0
  },
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export const ProjectCardGallery = ({ className, ...props }: ProjectCardGalleryProps) => {
  return (
    <AnimateOnScroll config={ProjectCardGalleryAnimation}>
      <SlotElement
        tag='ul'
        className={cn('grid w-full gap-4 sm:grid-cols-2 md:pt-64', className)}
        {...props}
      />
    </AnimateOnScroll>
  );
};
