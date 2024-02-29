import DataChangerAction from './Action';
import DataChangerItem from './Item';
import DataChangerRoot from './Root';
import DataChangerTimerbar from './Timerbar';

const DataChanger = DataChangerRoot;

DataChanger.Action = DataChangerAction;
DataChanger.Item = DataChangerItem;
DataChanger.Timerbar = DataChangerTimerbar;

export default DataChanger;
export {
  DataChangerRoot as DataChanger,
  DataChangerAction,
  DataChangerItem,
  DataChangerTimerbar,
};
