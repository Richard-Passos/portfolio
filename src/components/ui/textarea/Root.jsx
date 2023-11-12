import { forwardRef } from 'react';

import { cn } from '@/utils';

const Textarea = ({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'h-20 w-full resize-none rounded-sm border bg-main px-4 py-3 text-sm placeholder:text-muted-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
