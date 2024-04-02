import AnimateRoot from './Root';
import AnimatePresence from './Presence';

const Animate = AnimateRoot

Animate.Presence = AnimatePresence;

export default Animate;
export {
AnimateRoot as Animate,
AnimatePresence
}