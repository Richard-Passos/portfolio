'use client';

import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { AccordionItemContent, type AccordionItemContentProps } from '@ark-ui/react';

export type AccordionContentProps = MergeProps<
  { wrapperProps?: AccordionItemContentProps },
  SlotElementProps<'div'>
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
