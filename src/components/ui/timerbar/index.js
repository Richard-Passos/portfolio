import TimerbarIndicator from './Indicator';
import TimerbarRoot, { TIMERBAR_UPDATE_DELAY } from './Root';

const Timerbar = TimerbarRoot;

Timerbar.Indicator = TimerbarIndicator;

export default Timerbar;
export { TimerbarRoot as Timerbar, TimerbarIndicator, TIMERBAR_UPDATE_DELAY };
