import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { Cursor } from '@/components';
import { cn } from '@/utils';

import cursorVariant from './cursorVariant';

const Text = ({ cursorProps, asChild, className, ...props }, ref) => {
  cursorProps = {
    ...cursorProps,
    variant: { ...cursorVariant, ...cursorProps?.variant },
  };

  const Tag = asChild ? Slot : 'p';

  return (
    <Cursor.Hover
      ref={ref}
      {...cursorProps}
    >
      <Tag
        className={cn('text-content transition-color', className)}
        {...props}
      />
    </Cursor.Hover>
  );
};

export default forwardRef(Text);
