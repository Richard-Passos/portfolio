'use client';

import { Root } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenu = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        'relative z-10 flex w-full max-w-max justify-center',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenu);
