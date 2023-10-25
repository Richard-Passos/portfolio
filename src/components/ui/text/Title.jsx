import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextTitle = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag
      className={cn(
        'transition-color text-xl font-bold',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextTitle);
