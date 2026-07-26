import { MouseTrail } from './Root';
import { MouseTrailContainer } from './Container';

export * from './Root';
export * from './Container';

export default Object.assign(MouseTrail, {
  Container: MouseTrailContainer
});
