import { forwardRef } from 'react';

import { cn } from '@/utils';

const Table = ({ className, ...props }, ref) => {
  return (
    <table
      className={cn('w-full caption-bottom text-sm', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Table);
