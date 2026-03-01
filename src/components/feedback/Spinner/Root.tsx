import { ComponentProps } from 'react';

import { cn } from '@/utils';

export type SpinnerProps = ComponentProps<'span'>;

export const Spinner = ({ className, ...props }: SpinnerProps) => {
  return (
    <span
      className={cn('size-[.5em] border-2 border-t-0 border-current', className)}
      {...props}
    />
  );
};
