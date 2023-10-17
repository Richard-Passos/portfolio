import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import Cursor from '@/components/cursor';
import { cn } from '@/utils';

import cursorVariant from './cursorVariant';

const TextSubtitle = ({ cursorProps, asChild, className, ...props }, ref) => {
  cursorProps = {
    ...cursorProps,
    ref,
    variant: { ...cursorVariant, ...cursorProps?.variant },
  };

  const Tag = asChild ? Slot : 'h3';

  return (
    <Cursor.Hover {...cursorProps}>
      <Tag
        className={cn(
          'text-lg font-semibold text-content transition-color',
          className,
        )}
        {...props}
      />
    </Cursor.Hover>
  );
};

export default forwardRef(TextSubtitle);
