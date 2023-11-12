'use client';

import { Header } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionHeader = ({ className, ...props }, ref) => {
  return (
    <Header
      className={cn(
        'relative w-full before:absolute before:inset-x-6 before:bottom-0 before:h-px before:shadow-[0_.8px_0] before:shadow-muted-content/10',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionHeader);
