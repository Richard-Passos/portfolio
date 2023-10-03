'use client';

import { Root } from '@radix-ui/react-aspect-ratio';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AspectRatio = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AspectRatio);
