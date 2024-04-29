'use client';

import { forwardRef, useRef } from 'react';

import { useChildrenCount } from '@/hooks';
import { cn } from '@/utils';

const InfinityScroll = ({ as, dir = 'ltr', className, children, ...props }) => {
  const parentRef = useRef(null),
    childrenRef = useRef(null);

  const childrenCount = useChildrenCount(parentRef, childrenRef);

  const Tag = as ?? 'div';

  const directions = {
    ltr: '[--initial-x:-50%] [--final-x:0%]',
    rtl: '[--initial-x:0%] [--final-x:-50%]',
  };

  return (
    <div
      className='w-full overflow-hidden'
      ref={parentRef}
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

        {[...Array(childrenCount)].map((_, i) => (
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
