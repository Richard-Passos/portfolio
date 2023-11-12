import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextTitle = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag
      className={cn('text-xl font-semibold', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextTitle);
