import StatsDescription from './Description';
import StatsItem from './Item';
import StatsRoot from './Root';
import StatsTitle from './Title';

const Stats = StatsRoot;

Stats.Description = StatsDescription;
Stats.Item = StatsItem;
Stats.Title = StatsTitle;

export default Stats;
export { StatsRoot as Stats, StatsDescription, StatsItem, StatsTitle };
