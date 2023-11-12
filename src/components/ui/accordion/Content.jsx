'use client';

import { Content } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionContent = ({ className, children, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'mt-px text-sm text-muted-content [--height:--radix-accordion-content-height] data-closed:animate-slide-up data-open:animate-slide-down [&>div]:p-5 [&>div]:pt-4',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div>{children}</div>
    </Content>
  );
};

export default forwardRef(AccordionContent);
