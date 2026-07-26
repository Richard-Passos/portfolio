import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ComponentProps, ReactNode } from 'react';

export type MouseTrailProps = MergeProps<{ items: ReactNode[] }, ComponentProps<'div'>>;

export const MouseTrail = ({ items, className, ...props }: MouseTrailProps) => {
  return items.map((node, i) => (
    <div
      data-trail-item
      key={`mouse-trail-item-${i}`}
      className={cn(
        'pointer-events-none absolute top-0 left-0 z-50 -translate-1/2 opacity-0 will-change-[transform,opacity] select-none',
        className
      )}
      {...props}
    >
      {node}
    </div>
  ));
};
