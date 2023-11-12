'use client';

import { Item } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'overflow-hidden border-b first:rounded-t-inherit last:rounded-b-inherit last:border-b-0 focus-within:z-10 focus-within:outline',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionItem);
