import { Mission } from './Root';
import { MissionScrollBands } from './ScrollBands';
import { MissionText } from './Text';

export * from './Root';
export * from './ScrollBands';
export * from './Text';

export default Object.assign(Mission, {
  ScrollBands: MissionScrollBands,
  Text: MissionText
});
