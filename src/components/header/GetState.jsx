'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSelector } from 'react-redux';

import { cn } from '@/utils';
import { forwardRef } from 'react';

const HeaderGetState = ({ className, style, ...props }, ref) => {
  const { theme, height } = useSelector((data) => data.header);

  return (
    <Slot
      ref={ref}
      className={cn(`theme-${theme}`, className)}
      style={{ '--header-h': `${height}px`, ...style }}
      {...props}
    />
  );
};

export default forwardRef(HeaderGetState);
