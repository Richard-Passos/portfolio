import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextSmall = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'small';

  return (
    <Tag
      className={cn('text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextSmall);
