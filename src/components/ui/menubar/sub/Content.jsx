'use client';

import { SubContent } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarContentVariants } from '../Content';

const MenubarSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(
        menubarContentVariants(),
        'min-w-[8rem] shadow-lg',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarSubContent);
