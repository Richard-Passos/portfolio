import { ComponentProps } from 'react';

import { cn } from '@/utils';

type PlusIconAtomOwnProps = {};

type PlusIconAtomProps = PlusIconAtomOwnProps &
  Omit<ComponentProps<'svg'>, keyof PlusIconAtomOwnProps>;

const PlusIconAtom = ({ className, ...props }: PlusIconAtomProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Plus'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z' />
    </svg>
  );
};

export default PlusIconAtom;
export type { PlusIconAtomProps };
