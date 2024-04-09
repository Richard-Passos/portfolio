import ScrollAnimate from '../scroll-animate';

const SCROLL_OFFSET = ['0 1', '0 .55'],
  ANIMATION_CONFIG = {
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: 'opacity',
      propPoints: [0, 1],
    },
    y: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: 'y',
      propPoints: ['50%', '0%'],
    },
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--tw-rotate',
      propPoints: ['12deg', '0deg'],
    },
  };

const BentoGridScrollAnimte = ({ children }) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.opacity}>
      <ScrollAnimate.Transform config={ANIMATION_CONFIG.y}>
        <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
          {children}
        </ScrollAnimate>
      </ScrollAnimate.Transform>
    </ScrollAnimate>
  );
};

export default BentoGridScrollAnimte;
