'use client';

import { Root } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenu = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenu);
