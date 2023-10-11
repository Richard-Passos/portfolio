'use client';

import { List } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuList = ({ className, ...props }, ref) => {
  return (
    <List
      className={cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenuList);
