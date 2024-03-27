'use client'

import { cn } from '@/utils';

import Portal from '../portal';
import { useContext } from 'react';
import { MenuContext } from '@/contexts';

const MenuPortal = ({ className, ...props }) => {
  const {isDeleted} = useContext(MenuContext)


  return !isDeleted && (
    <Portal
      className={cn('pointer-events-none flex items-center justify-center fixed inset-0 z-50', className)}
      {...props}
    />
  );
};

export default MenuPortal;
