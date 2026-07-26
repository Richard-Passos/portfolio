'use client';

import { cn } from '@/utils/cn';
import {
  TooltipArrowTip,
  TooltipArrow as UiTooltipArrow,
  TooltipArrowProps as UiTooltipArrowProps
} from '@ark-ui/react/tooltip';

export type TooltipArrowProps = UiTooltipArrowProps;

export const TooltipArrow = ({ className, ...props }: TooltipArrowProps) => {
  return (
    <UiTooltipArrow
      className={cn(
        '[--arrow-background:hsl(var(--muted))] [--arrow-size:--spacing(2)]',
        className
      )}
      {...props}
    >
      <TooltipArrowTip className='border-t border-l' />
    </UiTooltipArrow>
  );
};
