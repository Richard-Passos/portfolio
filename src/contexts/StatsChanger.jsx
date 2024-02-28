'use client';

import { createContext, useState } from 'react';

import { useTimer } from '@/hooks';

const STATS_CHANGER_TIMER_DURATION = 5000; //ms

const StatsChangerContext = createContext({
  activeIdx: 0,
  handleSetAciveIdx: () => {},
  resetTimer: () => {},
  isPaused: false,
  setIsPaused: () => {},
});

const StatsChangerProvider = ({ lastIdx, value, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(0),
    [isPaused, setIsPaused] = useState(false);

  const handleSetAciveIdx = () =>
    setActiveIdx((state) => (state >= lastIdx ? 0 : state + 1));

  const resetTimer = useTimer(
    isPaused,
    handleSetAciveIdx,
    STATS_CHANGER_TIMER_DURATION,
  );

  return (
    <StatsChangerContext.Provider
      value={{
        activeIdx,
        handleSetAciveIdx,
        resetTimer,
        isPaused,
        setIsPaused,
        ...value,
      }}
      {...props}
    />
  );
};

export default StatsChangerContext;
export { StatsChangerProvider, STATS_CHANGER_TIMER_DURATION };
