import { type ComponentProps } from 'react';

import { Lines } from '@/components/misc/Lines';
import { AnimateOnScroll } from '@/components/motion/Animate/OnScroll';
import { cn } from '@/utils/cn';
import { type UseAnimateOnScrollOptions } from '@/hooks/useAnimateOnScroll';

export type ScrollYLinesProps = ComponentProps<'div'>;

export const ScrollYLinesAnimation = {
  from: {
    '--y': '-100%'
  },
  to: {
    '--y': '100%'
  },
} satisfies UseAnimateOnScrollOptions['config'];

export const ScrollYLines = ({ className, ...props }: ScrollYLinesProps) => {
  return (
    <AnimateOnScroll {...ScrollYLinesAnimation}>
      <div
        className={cn('relative overflow-hidden border rounded-2xl bg-body flex justify-center items-center', className)}
        {...props}
      >
          <Lines className='top-auto h-screen translate-y-(--y) bg-size-[83.333px_66.666px]' />
      </div>
    </AnimateOnScroll>
  );
};
