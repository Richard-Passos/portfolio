'use client';

import { Indicator } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuIndicator = ({ className, ...props }, ref) => {
  return (
    <Indicator
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-primary shadow-md' />
    </Indicator>
  );
};

export default forwardRef(NavigationMenuIndicator);
