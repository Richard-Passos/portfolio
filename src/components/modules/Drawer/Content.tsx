'use client';

import {
  DrawerContent as UiDrawerContent,
  DrawerContentProps as UiDrawerContentProps
} from '@ark-ui/react';

import { cn } from '@/utils/cn';

export type DrawerContentProps = UiDrawerContentProps;

export const DrawerContent = ({ className, ...props }: DrawerContentProps) => {
  return (
    <UiDrawerContent
      data-lenis-prevent
      className={cn('relative flex size-full flex-col bg-body', className)}
      {...props}
    />
  );
};
