'use client';

import { cn } from '@/utils/cn';
import {
  TooltipPositioner,
  TooltipContent as UiTooltipContent,
  TooltipContentProps as UiTooltipContentProps
} from '@ark-ui/react/tooltip';

export type TooltipContentProps = UiTooltipContentProps;

export const TooltipContent = ({ className, ...props }: TooltipContentProps) => {
  return (
    <TooltipPositioner>
      <UiTooltipContent
        className={cn('rounded-sm border bg-muted px-2 py-1 text-sm', className)}
        {...props}
      />
    </TooltipPositioner>
  );
};
