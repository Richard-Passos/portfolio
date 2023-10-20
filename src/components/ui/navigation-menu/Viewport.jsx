'use client';

import { Viewport } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuViewport = ({ className, ...props }, ref) => {
  return (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
      <Viewport
        className={cn(
          'origin-top-center text-main-content relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-main shadow-lg data-closed:animate-out data-closed:zoom-out-95 data-open:animate-in data-open:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]',
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default forwardRef(NavigationMenuViewport);
