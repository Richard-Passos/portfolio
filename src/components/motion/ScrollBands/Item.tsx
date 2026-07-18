import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { AnimateOnScroll, AnimateOnScrollConfig } from '../Animate/OnScroll';
import { MergeProps } from '@/types/MergeProps';

export type ScrollBandsItemProps = MergeProps<{ index: number }, ComponentProps<'li'>>;

export const ScrollBandsItemAnimation = {
  to: {
    '--x': '0%'
  },
  end: 'top 25%'
} satisfies AnimateOnScrollConfig;

export const ScrollBandsItem = ({
  index,
  className,
  style,
  children,
  ...props
}: ScrollBandsItemProps) => {
  return (
    <AnimateOnScroll
      config={{
        from: index % 2 == 0 ? { '--x': '-100%' } : { '--x': '100%' },
        ...ScrollBandsItemAnimation
      }}
    >
      <li
        aria-label={children?.toString()}
        className={cn(
          'relative w-full overflow-clip will-change-transform odd:-rotate-1 even:z-10 even:rotate-1',
          className
        )}
        style={{
          transform: 'translateX(var(--x))',
          ...style
        }}
        {...props}
      >
        <div
          aria-hidden
          className='w-full border-y bg-body py-8 text-4xl font-semibold text-nowrap will-change-transform md:text-7xl lg:text-9xl'
          style={{ transform: 'translateX(calc(var(--x) * -.5))' }}
        >
          {children} {children} {children}
        </div>
      </li>
    </AnimateOnScroll>
  );
};
