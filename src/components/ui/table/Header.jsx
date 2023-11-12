import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableHeader = ({ className, ...props }, ref) => {
  return (
    <thead
      className={cn('bg-main hover:[&_tr]:bg-transparent', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableHeader);
