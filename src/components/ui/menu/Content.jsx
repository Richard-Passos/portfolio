'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const KEYS = ['Esc'];

const MenuContent = ({ className, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <section
      aria-hidden={!isOpen}
      className={cn(
        'relative z-10 size-full max-w-bounds mx-auto p-6 overflow-x-clip overflow-y-auto space-y-6 text-primary-content bg-primary transition-[transform,opacity] pointer-events-auto data-closed:pointer-events-none duration-500 data-closed:duration-300 data-closed:scale-90 data-open:delay-300 data-closed:opacity-0 data-closed:-translate-y-2',
        className,
      )}
      data-state={isOpen ? 'open' : 'closed'}
      ref={ref}
      {...props}
      onKeyUp={(ev) => {
        if (KEYS.includes(ev.key)) setIsOpen(false);

        isFunctionThanCall(props.onKeyUp, ev);
      }}
    />
  );
};

export default forwardRef(MenuContent);
