'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

const MenuOverlay = ({ className, ...props }, ref) => {
  const { state } = useContext(MenuContext);

  return (
    <span
      ref={ref}
      data-state={state}
      className={cn(
        'pointer-events-auto absolute inset-0 bg-main/20 transition-opacity duration-300 data-closed:pointer-events-none data-closed:opacity-0 dark:bg-main/80',
        className,
      )}
      {...props}
    />
  );
};

export default forwardRef(MenuOverlay);
