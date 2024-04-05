'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSelector } from 'react-redux';

import { cn } from '@/utils';

const MenuState = ({ className, ...props }) => {
  const { theme } = useSelector((data) => data.header);

  return (
    <Slot
      className={cn(theme, className)}
      {...props}
    />
  );
};

export default MenuState;
