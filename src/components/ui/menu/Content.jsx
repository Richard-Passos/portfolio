'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const KEYS = ['Esc'];

const MenuContent = ({ variants, className, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <section
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm space-y-6 overflow-y-auto border-l bg-main p-6 shadow-lg transition-transform duration-500 ease-in-out data-closed:translate-x-full data-closed:duration-300 [body:has(&[data-state=open])]:overflow-y-hidden',
        className,
      )}
      data-state={isOpen ? 'open' : 'closed'}
      ref={ref}
      tabIndex={isOpen ? 1 : -1}
      {...props}
      onKeyDown={(ev) => {
        if (KEYS.includes(ev.key)) ev.preventDefault();

        isFunctionThanCall(props.onKeyDown, ev);
      }}
      onKeyUp={(ev) => {
        if (KEYS.includes(ev.key)) setIsOpen(false);

        isFunctionThanCall(props.onKeyUp, ev);
      }}
    />
  );
};

export default forwardRef(MenuContent);
