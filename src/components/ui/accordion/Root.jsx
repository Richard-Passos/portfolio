'use client';

import { Root } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Accordion = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Accordion);
