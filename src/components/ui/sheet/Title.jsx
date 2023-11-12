'use client';

import { Title } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SheetTitle = ({ className, ...props }, ref) => {
  return (
    <Title
      className={cn('text-lg font-semibold leading-none', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetTitle);
