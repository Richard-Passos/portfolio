'use client';

import {
  ProgressRoot as UiProgressRoot,
  ProgressRootProps as UiProgressRootProps
} from '@ark-ui/react';

import { cn } from '@/utils/cn';

export type ProgressProps = UiProgressRootProps;

export const Progress = ({ className, ...props }: ProgressProps) => {
  return (
    <UiProgressRoot
      className={cn('w-full', className)}
      {...props}
    />
  );
};
