import { ComponentProps, ReactNode } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

import { AnimateOnScroll, AnimateOnScrollConfig } from '../Animate/OnScroll';

export type ScrollBandsProps = MergeProps<
  {
    items: ReactNode[];
  },
  ComponentProps<'ul'>
>;

export const ScrollBandsAnimation = {
  to: {
    '--x': '0%'
  },
  start: 'top bottom',
  end: 'top 25%'
} satisfies AnimateOnScrollConfig;

export const ScrollBands = ({ items, className, ...props }: ScrollBandsProps) => {
  return (
    <ul
      className={cn('w-full overflow-x-clip', className)}
      {...props}
    >
      {items.map((el, i) => (
        <AnimateOnScroll
          key={i}
          from={i % 2 == 0 ? { '--x': '-100%' } : { '--x': '100%' }}
          {...ScrollBandsAnimation}
        >
          <li
            aria-label={el?.toString()}
            className='relative w-full overflow-clip will-change-transform odd:-rotate-1 even:z-10 even:rotate-1'
            style={{ transform: 'translateX(var(--x))' }}
          >
            <div
              aria-hidden
              className='w-full border-y bg-body py-8 text-4xl font-semibold text-nowrap will-change-transform md:text-7xl lg:text-9xl'
              style={{ transform: 'translateX(calc(var(--x) * -.5))' }}
            >
              {el} {el} {el}
            </div>
          </li>
        </AnimateOnScroll>
      ))}
    </ul>
  );
};
