import { ComponentProps } from 'react';

import { cn } from '@/utils';

type ArrowLeftIconProps = ComponentProps<'svg'>;

const ArrowLeftIcon = ({ className, ...props }: ArrowLeftIconProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Arrow left'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M21 12a1 1 0 0 1-1 1H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.416l4-4a1 1 0 0 1 1.414 1.416L6.414 11H20a1 1 0 0 1 1 1Z' />
    </svg>
  );
};

export { ArrowLeftIcon };
export type { ArrowLeftIconProps };
