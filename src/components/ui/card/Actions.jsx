import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardActions = ({ className, ...props }, ref) => {
  return (
    <section
      aria-label='Actions'
      className={cn('flex items-center justify-end gap-2', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardActions);
