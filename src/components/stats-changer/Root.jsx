'use client';

import { useContext } from 'react';

import { StatsChangerContext, StatsChangerProvider } from '@/contexts';
import { cn } from '@/utils';

const StatsChanger = ({ lastIdx, className, ...props }) => {
  const { setIsPaused } = useContext(StatsChangerContext);

  return (
    <StatsChangerProvider lastIdx={lastIdx}>
      <section
        className={cn('flex w-fit items-center', className)}
        {...props}
        onMouseEnter={(ev) => {
          setIsPaused(true);

          isFunctionThanCall(props.onMouseEnter, ev);
        }}
        onMouseLeave={(ev) => {
          setIsPaused(false);

          isFunctionThanCall(props.onMouseLeave, ev);
        }}
      />
    </StatsChangerProvider>
  );
};

export default StatsChanger;
