'use client';

import { forwardRef, useEffect, useState } from 'react';

import { Progress } from '../progress';

const TIMERBAR_UPDATE_DELAY = 100;

const Timerbar = ({ duration = 5000, pause, ...props }, ref) => {
  const [value, setValue] = useState(duration);

  useEffect(() => {
    if (!pause) {
      const id = setInterval(() => {
        setValue((value) => (value > 0 ? value - TIMERBAR_UPDATE_DELAY : 0));
      }, TIMERBAR_UPDATE_DELAY);

      return () => clearInterval(id);
    }
  }, [pause]);

  return (
    <Progress
      max={duration}
      ref={ref}
      value={value}
      {...props}
    />
  );
};

export default forwardRef(Timerbar);
export { TIMERBAR_UPDATE_DELAY };
