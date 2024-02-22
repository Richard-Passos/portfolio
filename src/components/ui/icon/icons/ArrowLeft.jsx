import { forwardRef } from 'react';

import { cn } from '@/utils';

const ArrowLeftIcon = ({ className, ...props }, ref) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-svg='Arrow left'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M21 12a1 1 0 0 1-1 1H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.416l4-4a1 1 0 0 1 1.414 1.416L6.414 11H20a1 1 0 0 1 1 1Z' />
    </svg>
  );
};

export default forwardRef(ArrowLeftIcon);
