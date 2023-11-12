import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuIcon = ({ className, ...props }, ref) => {
  return (
    <Slot
      className={cn('h-3.5 w-3.5', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuIcon);
