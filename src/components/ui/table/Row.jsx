import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableRow = ({ className, ...props }, ref) => {
  return (
    <tr
      className={cn(
        'border-b transition-colors hover:bg-muted data-[state=selected]:bg-muted',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableRow);
