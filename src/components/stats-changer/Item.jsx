'use client';

import { useContext } from 'react';

import { StatsChangerContext } from '@/contexts';
import { cn } from '@/utils';

const StatsChangerItem = ({ idx, className, ...props }) => {
  const { activeIdx } = useContext(StatsChangerContext);

  const isActive = activeIdx === idx;

  return (
    <li
      aria-hidden={!isActive}
      className={cn(
        'data-active:visible data-active:static group invisible absolute mb-1.5',
        className,
      )}
      data-state={isActive ? 'active' : 'inactive'}
      {...props}
    />
  );
};

export default StatsChangerItem;
