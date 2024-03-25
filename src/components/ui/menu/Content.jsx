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
        'pointer-events-auto relative z-10 mx-auto size-full max-w-bounds space-y-6 overflow-y-auto overflow-x-clip bg-primary p-6 text-primary-content transition-[transform,opacity] duration-500 data-closed:pointer-events-none data-closed:-translate-y-2 data-closed:scale-90 data-closed:opacity-0 data-closed:duration-300 data-open:delay-300',
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
