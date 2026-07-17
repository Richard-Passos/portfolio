'use client';

import {
  ProgressRange as UiProgressRange,
  ProgressRangeProps as UiProgressRangeProps
} from '@ark-ui/react';

import { cn } from '@/utils/cn';

export type ProgressRangeProps = UiProgressRangeProps;

export const ProgressRange = ({ className, ...props }: ProgressRangeProps) => {
  return (
    <UiProgressRange
      className={cn(
        'h-full bg-primary ring-offset-inherit transition-[width] duration-150 ease-in-out',
        className
      )}
      {...props}
    />
  );
};
