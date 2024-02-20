'use client';

import { forwardRef, useContext } from 'react';

import { CarouselContext } from '@/contexts';
import { cn } from '@/utils';

const CarouselProgressIndicator = ({ className, style, ...props }, ref) => {
  const { progress } = useContext(CarouselContext);

  return (
    <div
      className={cn(
        'h-full w-full translate-x-[--x] bg-variant transition-transform duration-300',
        className,
      )}
      ref={ref}
      style={{
        '--x': `${progress.current * 100 - 100}%`,
        ...style,
      }}
      {...props}
    />
  );
};

export default forwardRef(CarouselProgressIndicator);
