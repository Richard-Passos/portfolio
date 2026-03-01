import { ComponentProps } from 'react';

import { cn } from '@/utils';

type HeartIconRootProps = ComponentProps<'svg'>;

const HeartIconRoot = ({ className, ...props }: HeartIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Heart'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M20.83 11.465C19.657 17.515 12 21 12 21s-7.658-3.485-8.831-9.535C2.449 7.754 4.022 4.019 8.021 4 11 3.986 12 6.988 12 6.988s1-3 3.978-2.988c4.008.019 5.572 3.754 4.852 7.465Z' />
    </svg>
  );
};

export { HeartIconRoot };
export type { HeartIconRootProps };
