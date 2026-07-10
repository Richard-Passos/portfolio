import { ComponentProps } from 'react';

import { Lines } from '@/components/misc/Lines';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { cn } from '@/utils/cn';

export type ScrollYLinesProps = ComponentProps<'div'>;

export const ScrollYLinesAnimation = {
  target: '.lines',
  from: {
    y: '-100%'
  },
  to: {
    y: '100%'
  }
} satisfies AnimateOnScrollConfig;

export const ScrollYLines = ({ className, ...props }: ScrollYLinesProps) => {
  return (
    <AnimateOnScroll {...ScrollYLinesAnimation}>
      <div
        className={cn(
          'relative flex items-center justify-center overflow-hidden rounded-2xl border bg-body',
          className
        )}
        {...props}
      >
        <Lines className='lines top-auto h-screen bg-size-[83.333px_66.666px]' />
      </div>
    </AnimateOnScroll>
  );
};
