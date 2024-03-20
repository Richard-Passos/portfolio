'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const MenuOverlay = ({ className, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <div
      className={cn(
        'fixed right-0 top-0 z-50 h-svh w-screen bg-main/75 backdrop-blur-sm transition-opacity data-closed:pointer-events-none data-closed:opacity-0',
        className,
      )}
      data-state={isOpen ? 'open' : 'closed'}
      ref={ref}
      {...props}
      onClick={(ev) => {
        setIsOpen(false);

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default forwardRef(MenuOverlay);
