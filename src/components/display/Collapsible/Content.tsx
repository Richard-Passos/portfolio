'use client';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import {
  CollapsibleContent as UiCollapsibleContent,
  type CollapsibleContentProps as UiCollapsibleContentProps
} from '@ark-ui/react';
import { ComponentProps } from 'react';

export type CollapsibleContentProps = SlotAsChildProps<
  MergeProps<{ wrapperProps?: UiCollapsibleContentProps }, ComponentProps<'div'>>
>;

export const CollapsibleContent = ({
  asChild,
  wrapperProps,
  ...props
}: CollapsibleContentProps) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <UiCollapsibleContent
      {...wrapperProps}
      className={cn('overflow-hidden', wrapperProps?.className)}
      data-content
    >
      <Comp {...props} />
    </UiCollapsibleContent>
  );
};
