import { ComponentProps } from 'react';

import { cn } from '@/utils';

type CheckIconProps = ComponentProps<'svg'>;

const CheckIcon = ({ className, ...props }: CheckIconProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Check'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M9 18a1 1 0 0 1-.708-.3l-4-4.063a1 1 0 1 1 1.424-1.4l3.289 3.343 9.288-9.287a1 1 0 1 1 1.414 1.414l-10 10A1 1 0 0 1 9 18Z' />
    </svg>
  );
};

export { CheckIcon };
export type { CheckIconProps };
