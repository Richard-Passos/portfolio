import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableBody = ({ className, ...props }, ref) => {
  return (
    <tbody
      className={cn('last:[&_tr]:border-b-0', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableBody);
