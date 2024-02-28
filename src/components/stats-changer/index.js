import StatsChangerAction from './Action';
import StatsChangerItem from './Item';
import StatsChangerRoot from './Root';
import StatsChangerTimerbar from './Timerbar';

const StatsChanger = StatsChangerRoot;

StatsChanger.Action = StatsChangerAction;
StatsChanger.Item = StatsChangerItem;
StatsChanger.Timerbar = StatsChangerTimerbar;

export default StatsChanger;
export {
  StatsChangerRoot as StatsChanger,
  StatsChangerAction,
  StatsChangerItem,
  StatsChangerTimerbar,
};
