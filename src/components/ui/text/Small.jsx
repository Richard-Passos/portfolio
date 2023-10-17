import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { Cursor } from '@/components';
import { cn } from '@/utils';

import cursorVariant from './cursorVariant';

const TextSmall = ({ cursorProps, asChild, className, ...props }, ref) => {
  cursorProps = {
    ...cursorProps,
    ref,
    variant: { ...cursorVariant, ...cursorProps?.variant },
  };

  const Tag = asChild ? Slot : 'small';

  return (
    <Cursor.Hover {...cursorProps}>
      <Tag
        className={cn('text-gray-tertiary text-sm', className)}
        {...props}
      />
    </Cursor.Hover>
  );
};

export default forwardRef(TextSmall);
