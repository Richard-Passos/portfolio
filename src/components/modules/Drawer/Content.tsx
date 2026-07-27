'use client';

import {
  DrawerPositioner,
  DrawerContent as UiDrawerContent,
  DrawerContentProps as UiDrawerContentProps
} from '@ark-ui/react/drawer';

import { cn } from '@/utils/cn';
import { MergeProps } from '@/types/MergeProps';
import { Ref } from 'react';

export type DrawerContentProps = MergeProps<{ ref?: Ref<HTMLDivElement> }, UiDrawerContentProps>;

export const DrawerContent = ({ className, ref, ...props }: DrawerContentProps) => {
  return (
    <DrawerPositioner
      data-lenis-prevent
      className={cn(
        'fixed -inset-px z-50 flex focus-visible:outline-none',
        'data-[swipe-direction=up]:items-start data-[swipe-direction=up]:justify-center',
        'data-[swipe-direction=down]:items-end data-[swipe-direction=down]:justify-center',
        'data-[swipe-direction=left]:items-stretch data-[swipe-direction=left]:justify-start',
        'data-[swipe-direction=right]:items-stretch data-[swipe-direction=right]:justify-end'
      )}
    >
      <UiDrawerContent
        ref={ref}
        data-lenis-prevent
        className={cn('relative flex size-full flex-col overflow-auto bg-body', className)}
        {...props}
      />
    </DrawerPositioner>
  );
};
