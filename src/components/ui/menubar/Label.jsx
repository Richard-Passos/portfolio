'use client';

import { Label } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MenubarLabel = ({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'px-3 py-1.5 text-sm font-semibold text-muted-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarLabel);
