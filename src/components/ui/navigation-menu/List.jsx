'use client';

import { List } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuList = ({ className, ...props }, ref) => {
  return (
    <List
      className={cn(
        'flex items-center justify-center gap-1 rounded-md border bg-main p-1',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenuList);
