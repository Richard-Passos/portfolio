import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export type PlusIconProps = ComponentProps<'svg'>;

export const PlusIcon = ({ className, ...props }: PlusIconProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Plus'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z' />
    </svg>
  );
};

