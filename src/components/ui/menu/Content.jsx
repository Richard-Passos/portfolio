'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

const MenuContent = ({ className, ...props }, ref) => {
  const { isOpen, state } = useContext(MenuContext);

  return (
    <section
      aria-hidden={!isOpen}
      className={cn(
        'primary group/menu pointer-events-auto relative z-10 flex size-full items-center justify-center bg-main duration-500 [clip-path:inset(0_round_0)] [transition:transform_.7,clip-path_.5] data-closed:-translate-y-[20%] data-closed:[clip-path:inset(0_0_100%_0_round_0_0_50%_50%)] data-closed:[transition:transform_.5,clip-path_.3]',
        className,
      )}
      data-state={state}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenuContent);
