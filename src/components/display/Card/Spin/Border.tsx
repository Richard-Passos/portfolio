import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { PlusIcon } from '@/components/system/Icon/Plus';

export type SpinCardBorderProps = Omit<ComponentProps<'div'>, 'children'>;

export const SpinCardBorder = ({ className, ...props }: SpinCardBorderProps) => {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute -inset-px -z-10 border border-border/25 bg-body group-hover/card:bg-body-hover',
        className
      )}
      {...props}
    >
      <PlusIcon className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2' />
      <PlusIcon className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2' />
      <PlusIcon className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2' />
      <PlusIcon className='absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2' />
    </div>
  );
};
