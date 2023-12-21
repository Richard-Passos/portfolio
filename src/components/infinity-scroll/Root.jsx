'use client';

import { forwardRef, useRef } from 'react';

import { useGetNumberOfSiblings } from '@/hooks';
import { cn } from '@/utils';

const InfinityScroll = ({
  as,
  direction = 'toRight',
  className,
  children,
  ...props
}) => {
  const containerRef = useRef(null),
    childrenRef = useRef(null);

  const numberOfSiblings = useGetNumberOfSiblings(
    containerRef,
    childrenRef,
    2,
    true,
  );

  const Tag = as ?? 'div';

  const directions = {
    toLeft: '[--initial-x:0%] [--final-x:-50%]',
    toRight: '[--initial-x:-50%] [--final-x:0%]',
  };

  return (
    <div
      className='w-full overflow-hidden'
      ref={containerRef}
    >
      <Tag
        className={cn(
          'relative flex w-fit animate-scroll-x items-center gap-[--gap] whitespace-nowrap',
          directions[direction],
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
