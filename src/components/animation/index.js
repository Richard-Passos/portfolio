import AnimationAnimate from './Animate';
import AnimationInView from './InView';
import AnimationRoot from './Root';

const Animation = AnimationRoot;

Animation.Animate = AnimationAnimate;
Animation.InView = AnimationInView;

export default Animation;
export { AnimationRoot as Animation, AnimationAnimate, AnimationInView };
