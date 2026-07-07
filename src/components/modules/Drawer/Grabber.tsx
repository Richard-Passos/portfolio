'use client'

import { MergeProps } from '@/types/MergeProps'
import { cn } from '@/utils/cn';
import {
  DrawerGrabber as UiDrawerGrabber,
  type DrawerGrabberProps as UiDrawerGrabberProps,
  DrawerGrabberIndicator,
  type DrawerGrabberIndicatorProps
} from '@ark-ui/react'

export type DrawerGrabberProps = MergeProps<{indicatorProps?: DrawerGrabberIndicatorProps}, UiDrawerGrabberProps>;

export const DrawerGrabber = ({ className, indicatorProps, ...props }: DrawerGrabberProps) => {
  const { className: indicatorClassName, ...indicator } = indicatorProps ?? {}

  return <UiDrawerGrabber className={cn('group/grabber flex items-center justify-center shrink-0 w-full py-5 cursor-grab select-none touch-none active:cursor-grabbing', className)} {...props}>
        <DrawerGrabberIndicator className={cn('w-10 h-1 bg-muted group-hover/grabber:bg-muted-hover rounded-full', indicatorClassName)} {...indicator}/>
      </UiDrawerGrabber>
}
