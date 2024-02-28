import { forwardRef } from 'react';

import { cn } from '@/utils';

import { ProgressIndicator } from '../progress';
import { TIMERBAR_UPDATE_DELAY } from './Root';

const TIMERBAR_INDICATOR_TRANSITION_DURATION = TIMERBAR_UPDATE_DELAY;

const TimerbarIndicator = ({ className, style, ...props }, ref) => {
  return (
    <ProgressIndicator
      className={cn('ease-linear', className)}
      ref={ref}
      style={{
        transitionDuration: TIMERBAR_INDICATOR_TRANSITION_DURATION,
        ...style,
      }}
      {...props}
    />
  );
};

export default forwardRef(TimerbarIndicator);
export { TIMERBAR_INDICATOR_TRANSITION_DURATION };
