'use client';

import { useContext } from 'react';

import { MagneticButton } from '@/components/button';
import { StatsChangerContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const StatsChangerAction = ({ className, variants, ...props }) => {
  const { setIsPaused, handleSetAciveIdx, resetTimer } =
    useContext(StatsChangerContext);

  return (
    <MagneticButton
      aria-label='Change statistic'
      className={cn(
        'mr-4 focus-visible:outline-content [&_svg]:size-[40%]',
        className,
      )}
      limit={0.2}
      variants={{ color: 'muted', size: 'sm', ...variants }}
      {...props}
      onBlur={(ev) => {
        setIsPaused(false);

        isFunctionThanCall(props.onBlur, ev);
      }}
      onClick={(ev) => {
        handleSetAciveIdx();
        resetTimer();

        isFunctionThanCall(props.onCLick, ev);
      }}
      onFocus={(ev) => {
        setIsPaused(true);

        isFunctionThanCall(props.onFocus, ev);
      }}
    />
  );
};

export default StatsChangerAction;
