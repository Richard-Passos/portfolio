import { MagneticContainer } from './Container';
import { MagneticRoot } from './Root';

export * from './Container';
export * from './Root';

const Magnetic = Object.assign(MagneticRoot, {
  Container: MagneticContainer
});

export { Magnetic };
