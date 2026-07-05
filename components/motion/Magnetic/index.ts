import { MagneticContainer } from './Container';
import { Magnetic as MagneticRoot } from './Root';

export * from './Container';
export * from './Root';

export const Magnetic = Object.assign(MagneticRoot, {
  Container: MagneticContainer
});
