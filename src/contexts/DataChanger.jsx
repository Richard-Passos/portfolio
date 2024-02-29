'use client';

import { createContext, useState } from 'react';

import { useTimer } from '@/hooks';

const DATA_CHANGER_TIMER_DURATION = 5000; //ms

const DataChangerContext = createContext({
  activeIdx: 0,
  handleSetAciveIdx: () => {},
  resetTimer: () => {},
  isPaused: false,
  setIsPaused: () => {},
});

const DataChangerProvider = ({ lastIdx, value, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(0),
    [isPaused, setIsPaused] = useState(false);

  const handleSetAciveIdx = () =>
    setActiveIdx((state) => (state >= lastIdx ? 0 : state + 1));

  const resetTimer = useTimer(
    isPaused,
    handleSetAciveIdx,
    DATA_CHANGER_TIMER_DURATION,
  );

  return (
    <DataChangerContext.Provider
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

export default DataChangerContext;
export { DataChangerProvider, DATA_CHANGER_TIMER_DURATION };
