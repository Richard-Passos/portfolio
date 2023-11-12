import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ToastIcon = ({ className, ...props }, ref) => {
  return (
    <Slot
      aria-hidden
      className={cn('-mx-2 mb-auto h-5 w-5', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastIcon);
