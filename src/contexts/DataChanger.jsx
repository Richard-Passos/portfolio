'use client';

import { createContext, useState } from 'react';

import { useTimer } from '@/hooks';

const DataChangerContext = createContext({
  activeIdx: 0,
  handleSetAciveIdx: () => {},
  resetTimer: () => {},
  isPaused: false,
  setIsPaused: () => {},
  duration: 5000, //ms
});

const DataChangerProvider = ({ lastIdx, duration = 5000, value, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(0),
    [isPaused, setIsPaused] = useState(false);

  const handleSetAciveIdx = () =>
    setActiveIdx((state) => (state >= lastIdx ? 0 : state + 1));

  const resetTimer = useTimer(isPaused, handleSetAciveIdx, duration);

  return (
    <DataChangerContext.Provider
      value={{
        activeIdx,
        handleSetAciveIdx,
        resetTimer,
        isPaused,
        setIsPaused,
        duration,
        ...value,
      }}
      {...props}
    />
  );
};

export default DataChangerContext;
export { DataChangerProvider };
