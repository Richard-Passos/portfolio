'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useContext } from 'react';

import { DataChangerContext } from '@/contexts';
import { cn } from '@/utils';

const DataChangerItem = ({ asChild, idx, className, ...props }, ref) => {
  const { activeIdx } = useContext(DataChangerContext);

  const Tag = asChild ? Slot : 'li',
    isActive = activeIdx === idx;

  return (
    <Tag
      aria-hidden={!isActive}
      className={cn(
        'group invisible absolute data-active:visible data-active:relative',
        className,
      )}
      data-state={isActive ? 'active' : 'inactive'}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DataChangerItem);
