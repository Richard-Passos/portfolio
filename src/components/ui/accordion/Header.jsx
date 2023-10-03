'use client';

import { Header } from '@radix-ui/react-accordion';

import { cn } from '@/utils';

const AccordionHeader = ({ className, ...props }) => {
  return (
    <Header
      className={cn('flex', className)}
      {...props}
    />
  );
};

export default AccordionHeader;
