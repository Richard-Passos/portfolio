import { ComponentProps } from 'react';

import { cn } from '@/utils';

type WidthIconAtomOwnProps = {};

type WidthIconAtomProps = WidthIconAtomOwnProps &
  Omit<ComponentProps<'svg'>, keyof WidthIconAtomOwnProps>;

const WidthIconAtom = ({ className, ...props }: WidthIconAtomProps) => {
  return (
    <svg
      className={cn('h-8 w-8 stroke-current', className)}
      data-icon='Width'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22 12H2M22 12L18 16M22 12L18 8M2 12L6 16M2 12L6 8'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  );
};

export default WidthIconAtom;
export type { WidthIconAtomProps };
