'use client'

import { cn } from '@/utils/cn';
import { DrawerBackdrop as UiDrawerBackdrop, type DrawerBackdropProps as UiDrawerBackdropProps } from '@ark-ui/react'

export type DrawerBackdropProps = UiDrawerBackdropProps;

export const DrawerBackdrop = ({ className, ...props }: DrawerBackdropProps) => {
  return <UiDrawerBackdrop data-lenis-prevent className={cn('fixed inset-0 bg-body-emphasis/15 dark:bg-body/75', className)} {...props}/>
}