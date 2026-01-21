import { ComponentProps } from 'react';

import { cn } from '@/utils';

type ArrowRightIconAtomOwnProps = {};

type ArrowRightIconAtomProps = ArrowRightIconAtomOwnProps &
  Omit<ComponentProps<'svg'>, keyof ArrowRightIconAtomOwnProps>;

const ArrowRightIconAtom = ({
  className,
  ...props
}: ArrowRightIconAtomProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Arrow right'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m20.706 12.708-4 4a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 0 1 0-2h13.586l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.416Z' />
    </svg>
  );
};

export default ArrowRightIconAtom;
export type { ArrowRightIconAtomProps };
