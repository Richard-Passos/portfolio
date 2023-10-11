'use client';

import { Link } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuLink = ({ className, ...props }, ref) => {
  return (
    <Link
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenuLink);
