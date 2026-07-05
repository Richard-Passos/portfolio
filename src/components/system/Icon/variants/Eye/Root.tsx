import { ComponentProps } from 'react';

import { cn } from '@/utils';

type EyeIconRootProps = ComponentProps<'svg'>;

const EyeIconRoot = ({ className, ...props }: EyeIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Eye'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M14.75 12a2.75 2.75 0 1 1-5.309-.988 1.112 1.112 0 0 0 .695.26 1.137 1.137 0 0 0 1.136-1.136 1.112 1.112 0 0 0-.26-.695A2.734 2.734 0 0 1 14.75 12Zm5.842 1.477C19.365 15.531 16.61 19 12 19s-7.365-3.469-8.592-5.523a2.877 2.877 0 0 1 0-2.954C4.635 8.469 7.39 5 12 5s7.365 3.469 8.592 5.523a2.877 2.877 0 0 1 0 2.954ZM16.25 12A4.25 4.25 0 1 0 12 16.25 4.255 4.255 0 0 0 16.25 12Z' />
    </svg>
  );
};

export { EyeIconRoot };
export type { EyeIconRootProps };
