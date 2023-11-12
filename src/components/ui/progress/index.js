import ProgressIndicator from './Indicator';
import ProgressRoot, { progressSizes, progressVariants } from './Root';

const Progress = ProgressRoot;

Progress.Indicator = ProgressIndicator;

export default Progress;
export {
  ProgressRoot as Progress,
  ProgressIndicator,
  progressSizes,
  progressVariants,
};
