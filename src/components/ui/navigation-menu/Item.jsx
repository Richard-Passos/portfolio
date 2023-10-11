'use client';

import { Item } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenuItem);
