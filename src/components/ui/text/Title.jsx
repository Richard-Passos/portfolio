import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import Cursor from '@/components/cursor';
import { cn } from '@/utils';

import cursorVariant from './cursorVariant';

const TextTitle = ({ cursorProps, asChild, className, ...props }, ref) => {
  cursorProps = {
    ...cursorProps,
    variant: { ...cursorVariant, ...cursorProps?.variant },
  };

  const Tag = asChild ? Slot : 'h2';

  return (
    <Cursor.Hover
      ref={ref}
      {...cursorProps}
    >
      <Tag
        className={cn(
          'text-xl font-bold text-content transition-color',
          className,
        )}
        {...props}
      />
    </Cursor.Hover>
  );
};

export default forwardRef(TextTitle);
