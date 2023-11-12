'use client';

import { Root } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Menubar = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        'flex items-center gap-1 rounded-md border bg-main p-1',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Menubar);
