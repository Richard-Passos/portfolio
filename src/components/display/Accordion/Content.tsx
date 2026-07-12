'use client';

import { SlotElement } from '@/components/misc/Slot/Element';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { AccordionItemContent, type AccordionItemContentProps } from '@ark-ui/react';
import { ComponentProps } from 'react';

export type AccordionContentProps = MergeProps<
  { wrapperProps?: AccordionItemContentProps },
  ComponentProps<'div'>
>;

export const AccordionContent = ({ className, wrapperProps, ...props }: AccordionContentProps) => {
  return (
    <AccordionItemContent
      className={cn('overflow-hidden', wrapperProps?.className)}
      {...wrapperProps}
    >
      <SlotElement
        tag='div'
        {...props}
      />
    </AccordionItemContent>
  );
};
