import { ComponentProps } from 'react';

import { cn } from '@/utils';

type TimesIconProps = ComponentProps<'svg'>;

const TimesIcon = ({ className, ...props }: TimesIconProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Times'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m13.414 12 5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414Z' />
    </svg>
  );
};

export { TimesIcon };
export type { TimesIconProps };
