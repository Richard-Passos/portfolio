'use client';

import { forwardRef, useRef } from 'react';

import { useGetNumberOfSiblings } from '@/hooks';
import { cn } from '@/utils';

const InfinityScroll = ({ as, dir = 'ltr', className, children, ...props }) => {
  const containerRef = useRef(null),
    childrenRef = useRef(null);

  const numberOfSiblings = useGetNumberOfSiblings(
    containerRef,
    childrenRef,
    dir === 'btt' || dir === 'ttb' ? 'height' : 'width',
  );

  const Tag = as ?? 'div';

  const directions = {
    btt: '[--initial-y:0%] [--final-y:-50%]',
    ltr: '[--initial-x:-50%] [--final-x:0%]',
    ttb: '[--initial-y:-50%] [--final-y:0%]',
    rtl: '[--initial-x:0%] [--final-x:-50%]',
  };

  return (
    <div
      className='w-full overflow-hidden'
      ref={containerRef}
    >
      <Tag
        className={cn(
          'relative flex w-fit animate-infinity-scroll items-center gap-[--gap] whitespace-nowrap',
          directions[dir],
          className,
        )}
        {...props}
      >
        <InfinityScrollChildren
          className='first:ml-[--gap]'
          ref={childrenRef}
        >
          {children}
        </InfinityScrollChildren>

        {[...Array(numberOfSiblings)].map((_, i) => (
          <InfinityScrollChildren
            aria-hidden
            key={i}
          >
            {children}
          </InfinityScrollChildren>
        ))}
      </Tag>
    </div>
  );
};

const InfinityScrollChildren = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn('flex items-center gap-[--gap]', className)}
      ref={ref}
      {...props}
    />
  );
});
InfinityScrollChildren.displayName = 'InfinityScrollChildren';

export default InfinityScroll;
