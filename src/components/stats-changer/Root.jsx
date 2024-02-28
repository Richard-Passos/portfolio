'use client';

import { useContext } from 'react';

import { StatsChangerContext, StatsChangerProvider } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const StatsChanger = ({ className, ...props }) => {
  const { setIsPaused } = useContext(StatsChangerContext);

  return (
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
  );
};

const StatsChangerWithProvider = ({ lastIdx, ...props }) => {
  return (
    <StatsChangerProvider lastIdx={lastIdx}>
      <StatsChanger {...props} />
    </StatsChangerProvider>
  );
};

export default StatsChangerWithProvider;
