'use client';

import {
  DrawerPositioner as UiDrawerPositioner,
  DrawerPositionerProps as UiDrawerPositionerProps
} from '@ark-ui/react';

import { cn } from '@/utils/cn';

export type DrawerPositionerProps = UiDrawerPositionerProps;

export const DrawerPositioner = ({ className, ...props }: DrawerPositionerProps) => {
  return (
    <UiDrawerPositioner
      data-lenis-prevent
      className={cn(
        'fixed inset-0 flex',
        'data-[swipe-direction=up]:items-start data-[swipe-direction=up]:justify-center',
        'data-[swipe-direction=down]:items-end data-[swipe-direction=down]:justify-center',
        'data-[swipe-direction=left]:items-stretch data-[swipe-direction=left]:justify-start',
        'data-[swipe-direction=right]:items-stretch data-[swipe-direction=right]:justify-end',
        className
      )}
      {...props}
    />
  );
};
