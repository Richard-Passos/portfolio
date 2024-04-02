import AnimatePresence from './Presence';
import AnimateRoot from './Root';

const Animate = AnimateRoot;

Animate.Presence = AnimatePresence;

export default Animate;
export { AnimateRoot as Animate, AnimatePresence };
