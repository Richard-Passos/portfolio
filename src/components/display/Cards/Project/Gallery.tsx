'use client';

import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { SlotElement } from '@/components/misc/Slot/Element';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';

export type ProjectCardGalleryProps = ComponentProps<'ul'>;

export const ProjectCardGalleryAnimation = {
  target: 'li',
  from: {
    y: (i) => [0, -256][i % 2] ?? 0
  },
  to: {
    y: (i) => [-128, 0][i % 2] ?? 0
  }
} satisfies AnimateOnScrollConfig;

export const ProjectCardGallery = ({ className, ...props }: ProjectCardGalleryProps) => {
  return (
    <AnimateOnScroll {...ProjectCardGalleryAnimation}>
      <SlotElement
        tag='ul'
        className={cn('grid w-full gap-4 sm:grid-cols-2 md:pt-64', className)}
        {...props}
      />
    </AnimateOnScroll>
  );
};
