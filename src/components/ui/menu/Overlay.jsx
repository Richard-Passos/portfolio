'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

const MenuOverlay = ({ className, ...props }, ref) => {
  const { isOpen } = useContext(MenuContext);

  return (
    <div
      ref={ref}
      className={cn('group absolute inset-0', className)}
      data-state={isOpen ? 'open' : 'closed'}
    >
      <div
      className={cn(
        'pointer-events-auto z-10 absolute inset-0 -translate-y-full overflow-hidden rounded-[0_0_50%_50%] transition-[transform,border-radius] duration-500 group-data-closed:delay-300 group-data-open:translate-y-0 group-data-open:rounded-none',
        className,
      )}
      {...props}
    >
      <span className='size-full bg-primary transition-bg' />
    </div>

 <span className='bg-main/25 backdrop-blur-sm transition-opacity group-data-closed:delay-500 duration-300 pointer-events-auto group-data-closed:pointer-events-none group-data-closed:opacity-0 absolute inset-0'/>
    </div>
  );
};

export default forwardRef(MenuOverlay);
