import ScrollAnimationRoot from './Root';
import ScrollAnimationTransform from './Transform';

const ScrollAnimation = ScrollAnimationRoot;

ScrollAnimation.Transform = ScrollAnimationTransform;

export default ScrollAnimation;
export { ScrollAnimationRoot as ScrollAnimation, ScrollAnimationTransform };
