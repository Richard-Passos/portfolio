'use client';

import { forwardRef, useContext } from 'react';

import { TIMERBAR_UPDATE_DELAY } from '@/components/ui/timerbar';
import { TIMERBAR_INDICATOR_TRANSITION_DURATION } from '@/components/ui/timerbar/Indicator';
import { DataChangerContext } from '@/contexts';

const { Timerbar } = require('@/components/ui');

const DataChangerTimerbar = ({ variants, ...props }, ref) => {
  const { activeIdx, isPaused, duration } = useContext(DataChangerContext);

  return (
    <Timerbar
      duration={
        duration -
        TIMERBAR_UPDATE_DELAY -
        TIMERBAR_INDICATOR_TRANSITION_DURATION
      }
      key={activeIdx}
      pause={isPaused}
      ref={ref}
      variants={{ color: 'muted', size: 'sm', ...variants }}
      {...props}
    >
      <Timerbar.Indicator />
    </Timerbar>
  );
};

export default forwardRef(DataChangerTimerbar);
