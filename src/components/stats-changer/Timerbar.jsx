'use client';

import { useContext } from 'react';

import { TIMERBAR_UPDATE_DELAY } from '@/components/ui/timerbar';
import { TIMERBAR_INDICATOR_TRANSITION_DURATION } from '@/components/ui/timerbar/Indicator';
import { StatsChangerContext } from '@/contexts';
import { STATS_CHANGER_TIMER_DURATION } from '@/contexts/StatsChanger';

const { Timerbar } = require('@/components/ui');

const StatsChangerTimerbar = ({ variants, ...props }) => {
  const { activeIdx, isPaused } = useContext(StatsChangerContext);

  return (
    <Timerbar
      duration={
        STATS_CHANGER_TIMER_DURATION -
        TIMERBAR_UPDATE_DELAY -
        TIMERBAR_INDICATOR_TRANSITION_DURATION
      }
      key={activeIdx}
      pause={isPaused}
      variants={{ color: 'muted', size: 'sm', ...variants }}
      {...props}
    >
      <Timerbar.Indicator />
    </Timerbar>
  );
};

export default StatsChangerTimerbar;
