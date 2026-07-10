'use client';

import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';
import { Collapsible } from '@/components/display/Collapsible';

export type CareerCardProps = ComponentProps<'section'>;

export const CareerCard = ({ className, children, ...props }: CareerCardProps) => {
  return (
    <Collapsible asChild>
      <section
        className={cn('border bg-body', className)}
        {...props}
      >
        {children}
      </section>
    </Collapsible>
  );
};
