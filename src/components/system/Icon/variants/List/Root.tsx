import { ComponentProps } from 'react';

import { cn } from '@/utils';

type ListIconRootProps = ComponentProps<'svg'>;

const ListIconRoot = ({ className, ...props }: ListIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='List'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M21 6.5H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2Zm1 5.5a1 1 0 0 0-1-1H10a1 1 0 0 0 0 2h11a1 1 0 0 0 1-1Zm0 6.5a1 1 0 0 0-1-1H10a1 1 0 0 0 0 2h11a1 1 0 0 0 1-1ZM6 5.5A1.5 1.5 0 0 0 4.5 4 1.5 1.5 0 0 0 3 5.5 1.5 1.5 0 0 0 4.5 7 1.5 1.5 0 0 0 6 5.5ZM6 12a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 3 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 6 12Zm0 6.5A1.5 1.5 0 0 0 4.5 17 1.5 1.5 0 0 0 3 18.5 1.5 1.5 0 0 0 4.5 20 1.5 1.5 0 0 0 6 18.5Z' />
    </svg>
  );
};

export { ListIconRoot };
export type { ListIconRootProps };
