import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Card = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'article';

  return (
    <Tag
      className={cn(
        'space-y-6 rounded-md border bg-main p-6 shadow-md',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Card);
