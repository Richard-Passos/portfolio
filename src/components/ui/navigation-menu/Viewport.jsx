'use client';

import { Viewport } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuViewport = ({ className, ...props }, ref) => {
  return (
    <Viewport
      className={cn(
        'absolute top-full mt-2 h-[--radix-navigation-menu-viewport-height] w-full origin-top overflow-hidden rounded-md border bg-main shadow-md transition-[width,height] duration-300 data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 sm:w-[--radix-navigation-menu-viewport-width]',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenuViewport);
