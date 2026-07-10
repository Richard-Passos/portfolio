import { ComponentProps } from 'react';

import { Lines } from '@/components/misc/Lines';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { cn } from '@/utils/cn';

export type ScrollYLinesProps = ComponentProps<'div'>;

export const ScrollYLinesAnimation = {
  target: 'div',
  from: {
    y: '-50dvh'
  },
  to: {
    y: '50dvh'
  }
} satisfies AnimateOnScrollConfig;

export const ScrollYLines = ({ className, ...props }: ScrollYLinesProps) => {
  return (
    <AnimateOnScroll {...ScrollYLinesAnimation}>
      <div
        className={cn(
          'pointer-events-none absolute flex items-center justify-center overflow-hidden rounded-2xl border bg-body',
          className
        )}
        {...props}
      >
        <Lines className='top-auto h-[150dvh] bg-size-[83.333px_66.666px]' />
      </div>
    </AnimateOnScroll>
  );
};
