'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';

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

  const [numberOfSiblings, setNumberOfSiblings] = useState(0);

  useEffect(() => {
    const handleSetNumberOfSiblings = () => {
      if (containerRef.current && childrenRef.current) {
        const containerWidth =
            containerRef.current.getBoundingClientRect().width,
          childrenWidht = childrenRef.current.getBoundingClientRect().width;

        const numberOfChildren = Math.round(
          (containerWidth * 2) / childrenWidht,
        );

        setNumberOfSiblings(
          Math.max(
            numberOfChildren % 2 === 0
              ? numberOfChildren - 1
              : numberOfChildren,
            1,
          ),
        );
      }
    };

    handleSetNumberOfSiblings();

    window.addEventListener('resize', handleSetNumberOfSiblings);

    return () =>
      window.removeEventListener('resize', handleSetNumberOfSiblings);
  }, []);

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

const InfinityScrollChildren = forwardRef(({className, ...props}, ref) => {
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
