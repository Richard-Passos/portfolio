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
        'group invisible absolute mb-1.5 data-active:visible data-active:static',
        className,
      )}
      data-state={isActive ? 'active' : 'inactive'}
      {...props}
    />
  );
};

export default StatsChangerItem;
