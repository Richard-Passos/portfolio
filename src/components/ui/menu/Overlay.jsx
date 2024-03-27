'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

const MenuOverlay = ({ className, ...props }, ref) => {
  const { state } = useContext(MenuContext);

  return (

 <span       ref={ref}
       data-state={state}
 className={cn('bg-main/20 [body:has(.dark-layout)_&]:bg-main/80 transition-opacity duration-300 pointer-events-auto data-closed:pointer-events-none data-closed:opacity-0 absolute inset-0', className)} {...props}/>
  );
};

export default forwardRef(MenuOverlay);
