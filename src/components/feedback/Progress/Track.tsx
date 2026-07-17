'use client';

import {
  ProgressTrack as UiProgressTrack,
  ProgressTrackProps as UiProgressTrackProps
} from '@ark-ui/react';

import { cn } from '@/utils/cn';

export type ProgressTrackProps = UiProgressTrackProps;

export const ProgressTrack = ({ className, ...props }: ProgressTrackProps) => {
  return (
    <UiProgressTrack
      className={cn('h-1 rounded-full bg-muted', className)}
      {...props}
    />
  );
};
