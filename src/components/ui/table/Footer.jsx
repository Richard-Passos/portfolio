import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableFooter = ({ className, ...props }, ref) => {
  return (
    <tfoot
      className={cn('bg-primary font-medium text-primary-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableFooter);
