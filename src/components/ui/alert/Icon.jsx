import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertIcon = ({ className, ...props }, ref) => {
  return (
    <Slot
      className={cn('absolute left-4 top-5 h-5 w-5 [&~*]:pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertIcon);
