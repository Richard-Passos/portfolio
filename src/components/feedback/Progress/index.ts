import { Progress } from './Root';
import { ProgressLabel } from './Label';
import { ProgressPercentage } from './Percentage';
import { ProgressRange } from './Range';
import { ProgressTrack } from './Track';

export * from './Root';
export * from './Label';
export * from './Percentage';
export * from './Range';
export * from './Track';

export default Object.assign(Progress, {
  Label: ProgressLabel,
  Percentage: ProgressPercentage,
  Range: ProgressRange,
  Track: ProgressTrack
});
