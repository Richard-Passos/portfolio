'use client';

import { Indicator } from '@radix-ui/react-progress';
import { forwardRef, useContext } from 'react';

import { ProgressContext } from '@/contexts';
import { cn } from '@/utils';

const ProgressIndicator = ({ className, style, ...props }, ref) => {
  const { value, min, max } = useContext(ProgressContext);

  return (
    <Indicator
      className={cn(
        'h-full w-full transform bg-main transition-transform',
        className,
      )}
      ref={ref}
      style={{
        '--tw-translate-x': `-${Math.max(100 - (value / max) * 100, min)}%`,
        ...style,
      }}
      {...props}
    />
  );
};

export default forwardRef(ProgressIndicator);
