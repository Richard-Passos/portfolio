'use client';

import { Content } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'data-closed:animate-accordion-up data-open:animate-accordion-down overflow-hidden pb-4 text-sm transition-all',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionContent);
