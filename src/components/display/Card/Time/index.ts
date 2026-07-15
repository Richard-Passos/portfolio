import { TimeCard } from './Root';
import { TimeCardTime } from './Time';
import { TimeCardTitle } from './Title';

export * from './Root';
export * from './Time';
export * from './Title';

export default Object.assign(TimeCard, {
  Time: TimeCardTime,
  Title: TimeCardTitle
});
