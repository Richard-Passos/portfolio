import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Text = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      className={cn('transition-color text-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Text);
