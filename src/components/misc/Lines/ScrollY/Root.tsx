import { ComponentProps } from 'react';

import { Lines } from '@/components/misc/Lines';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { cn } from '@/utils/cn';

export type ScrollYLinesProps = ComponentProps<'div'>;

export const ScrollYLinesAnimation = {
  target: '[data-lines]',
  from: {
    y: '-50dvh'
  },
  to: {
    y: '50dvh'
  },
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export const ScrollYLines = ({ className, children, ...props }: ScrollYLinesProps) => {
  return (
    <AnimateOnScroll config={ScrollYLinesAnimation}>
      <div
        className={cn(
          'absolute -z-10 flex items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-body',
          className
        )}
        {...props}
      >
        <Lines
          data-lines
          className='top-auto z-0 h-[150dvh] border-y-0 bg-size-[83.333px_66.666px]'
        />

        {children}
      </div>
    </AnimateOnScroll>
  );
};
