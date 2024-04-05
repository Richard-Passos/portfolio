'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSelector } from 'react-redux';

import { cn } from '@/utils';

const HeaderGetState = ({ className, style, ...props }) => {
  const { theme, height } = useSelector((data) => data.header);

  return (
    <Slot
      className={cn(theme, className)}
      style={{ '--header-h': `${height}px`, ...style }}
      {...props}
    />
  );
};

export default HeaderGetState;
