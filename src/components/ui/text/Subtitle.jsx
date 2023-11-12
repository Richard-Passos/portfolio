import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextSubtitle = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h3';

  return (
    <Tag
      className={cn('text-lg font-semibold', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextSubtitle);
