import { ComponentProps } from 'react';

import { cn } from '@/utils';

type ArrowDownIconRootProps = ComponentProps<'svg'>;

const ArrowDownIconRoot = ({ className, ...props }: ArrowDownIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Arrow down'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m16.707 16.707-4 4a1 1 0 0 1-1.416 0l-4-4a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 0 1 2 0v13.586l2.293-2.293a1 1 0 0 1 1.414 1.414Z' />
    </svg>
  );
};

export { ArrowDownIconRoot };
export type { ArrowDownIconRootProps };
