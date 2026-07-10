'use client'

import { cn } from '@/utils/cn';
import { DrawerContent as UiDrawerContent, DrawerContentProps as UiDrawerContentProps } from '@ark-ui/react'

export type DrawerContentProps = UiDrawerContentProps;

export const DrawerContent = ({ className, ...props }: DrawerContentProps) => {
  return <UiDrawerContent
    data-lenis-prevent
    className={cn(
      'flex flex-col size-full relative bg-body',
      className
    )}
    {...props}
  />
}
