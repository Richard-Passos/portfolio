'use client';

import {
  DrawerGrabberIndicator,
  type DrawerGrabberIndicatorProps,
  DrawerGrabber as UiDrawerGrabber,
  type DrawerGrabberProps as UiDrawerGrabberProps
} from '@ark-ui/react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type DrawerGrabberProps = MergeProps<
  { indicatorProps?: DrawerGrabberIndicatorProps },
  UiDrawerGrabberProps
>;

export const DrawerGrabber = ({ className, indicatorProps, ...props }: DrawerGrabberProps) => {
  const { className: indicatorClassName, ...indicator } = indicatorProps ?? {};

  return (
    <UiDrawerGrabber
      className={cn(
        'group/grabber flex w-full shrink-0 cursor-grab touch-none items-center justify-center py-5 select-none active:cursor-grabbing',
        className
      )}
      {...props}
    >
      <DrawerGrabberIndicator
        className={cn(
          'h-1 w-10 rounded-full bg-muted group-hover/grabber:bg-muted-hover',
          indicatorClassName
        )}
        {...indicator}
      />
    </UiDrawerGrabber>
  );
};
