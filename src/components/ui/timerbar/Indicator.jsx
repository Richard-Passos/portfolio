import { forwardRef } from 'react';

import { cn } from '@/utils';

import { ProgressIndicator } from '../progress';
import { TIMERBAR_UPDATE_DELAY } from './Root';

const TimerbarIndicator = ({ className, style, ...props }, ref) => {
  return (
    <ProgressIndicator
      className={cn('ease-linear', className)}
      ref={ref}
      style={{ transitionDuration: TIMERBAR_UPDATE_DELAY, ...style }}
      {...props}
    />
  );
};

export default forwardRef(TimerbarIndicator);
