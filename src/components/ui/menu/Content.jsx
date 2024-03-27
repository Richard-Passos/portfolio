'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

const MenuContent = ({ className,children, ...props }, ref) => {
  const { isOpen } = useContext(MenuContext)

  return (
    <section
      aria-hidden={!isOpen}
       className={cn(
        'pointer-events-auto group/menu relative z-10 size-full flex items-center justify-center bg-primary text-primary-content [transition:transform_.7,clip-path_.5] duration-500 data-closed:-translate-y-[20%] [clip-path:inset(0_round_0)] data-closed:[clip-path:inset(0_0_100%_0_round_0_0_50%_50%)] data-closed:[transition:transform_.5,clip-path_.3]',
        className,
      )}
      data-state={isOpen ? 'open' : 'closed'}
      ref={ref}
      {...props}
    >
      <div className='size-full max-w-bounds 2xl:max-h-bounds overflow-y-auto flex flex-col gap-md justify-between p-sm'>
        {children}
      </div>
    </section>
  );
};

export default forwardRef(MenuContent);
