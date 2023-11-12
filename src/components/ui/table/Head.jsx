import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableHead = ({ className, ...props }, ref) => {
  return (
    <th
      className={cn(
        'p-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableHead);
