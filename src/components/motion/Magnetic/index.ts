import { MagneticContainer } from './Container';
import { Magnetic } from './Root';

export * from './Container';
export * from './Root';

export default Object.assign(Magnetic, {
  Container: MagneticContainer
});
