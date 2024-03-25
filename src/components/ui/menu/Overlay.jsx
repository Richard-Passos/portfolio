'use client';

import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

const MenuOverlay = ({ className, ...props }, ref) => {
  const { isOpen } = useContext(MenuContext);

  return (
    <div ref={ref} data-state={isOpen ? 'open' : 'closed'} className={cn('absolute inset-0 -translate-y-full overflow-hidden rounded-[0_0_50%_50%] pointer-events-auto transition-[transform,border-radius] duration-500 data-closed:delay-300 data-open:translate-y-0 data-open:rounded-none', className)} {...props}>
        <span className='size-full bg-primary transition-bg' />
      </div>
  );
};

export default forwardRef(MenuOverlay);
