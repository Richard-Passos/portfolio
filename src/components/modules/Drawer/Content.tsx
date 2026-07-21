'use client';

import {
  DrawerContent as UiDrawerContent,
  DrawerContentProps as UiDrawerContentProps
} from '@ark-ui/react';

import { cn } from '@/utils/cn';
import { MergeProps } from '@/types/MergeProps';
import { Ref } from 'react';

export type DrawerContentProps = MergeProps<{ ref?: Ref<HTMLDivElement> }, UiDrawerContentProps>;

export const DrawerContent = ({ className, ref, ...props }: DrawerContentProps) => {
  return (
    <UiDrawerContent
      ref={ref}
      data-lenis-prevent
      className={cn('relative flex size-full flex-col bg-body', className)}
      {...props}
    />
  );
};
