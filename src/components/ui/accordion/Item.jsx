'use client';

import { Item } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn('border-b', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionItem);
