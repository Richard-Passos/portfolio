import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextSmall = ({ cursorProps, asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'small';

  return (
    <Tag
      className={cn('transition-color text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextSmall);
