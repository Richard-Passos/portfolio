'use client';

import {
  DrawerBackdrop as UiDrawerBackdrop,
  DrawerBackdropProps as UiDrawerBackdropProps
} from '@ark-ui/react';

import { cn } from '@/utils/cn';
import { MergeProps } from '@/types/MergeProps';
import { Ref } from 'react';

export type DrawerBackdropProps = MergeProps<{ ref?: Ref<HTMLDivElement> }, UiDrawerBackdropProps>;

export const DrawerBackdrop = ({ className, ref, ...props }: DrawerBackdropProps) => {
  return (
    <UiDrawerBackdrop
      ref={ref}
      data-lenis-prevent
      className={cn(
        'fixed -inset-2 bg-body-emphasis/15 blur-sm backdrop-blur-[2px] dark:bg-body/75',
        className
      )}
      {...props}
    />
  );
};
