'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import { cn } from '@/utils';

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
