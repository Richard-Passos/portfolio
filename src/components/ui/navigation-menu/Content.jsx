'use client';

import { Content } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'absolute left-0 top-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-full max-sm:w-full',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenuContent);
