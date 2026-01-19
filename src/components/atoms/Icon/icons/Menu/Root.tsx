import { ComponentProps } from 'react';

import { cn } from '@/utils';

type MenuIconAtomOwnProps = {};

type MenuIconAtomProps = MenuIconAtomOwnProps &
  Omit<ComponentProps<'svg'>, keyof MenuIconAtomOwnProps>;

const MenuIconAtom = ({ className, ...props }: MenuIconAtomProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Menu'
      transform='scale(-1 1)'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M16 7H3a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2Zm6 5a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 1-1Zm-9 6a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h9a1 1 0 0 0 1-1Z' />
    </svg>
  );
};

export default MenuIconAtom;
export type { MenuIconAtomProps };
