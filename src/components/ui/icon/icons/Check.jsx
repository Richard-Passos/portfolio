import { forwardRef } from 'react';

import { cn } from '@/utils';

const CheckIcon = ({ className, ...props }, ref) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-svg='Check'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M9 18a1 1 0 0 1-.708-.3l-4-4.063a1 1 0 1 1 1.424-1.4l3.289 3.343 9.288-9.287a1 1 0 1 1 1.414 1.414l-10 10A1 1 0 0 1 9 18Z' />
    </svg>
  );
};

export default forwardRef(CheckIcon);
