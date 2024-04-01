'use client';

import { useContext } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

import Portal from '../portal';

const MenuPortal = ({ className, ...props }) => {
  const { isDeleted } = useContext(MenuContext);

  return (
    !isDeleted && (
      <Portal
        className={cn(
          'pointer-events-none fixed inset-0 z-50 flex items-center justify-center',
          className,
        )}
        {...props}
      />
    )
  );
};

export default MenuPortal;
