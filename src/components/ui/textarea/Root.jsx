import { forwardRef } from 'react';

import { cn } from '@/utils';

const Textarea = ({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'h-28 w-full cursor-pointer resize-none rounded-sm border bg-main px-4 py-3 text-sm placeholder:text-muted-content/75 hover:border-content/20 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
