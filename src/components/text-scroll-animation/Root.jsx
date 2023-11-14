import ScrollAnimation from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';

const TextScrollAnimation = ({ text, className, ...props }) => {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, i) => (
        <>
          <Word
            key={i}
            {...props}
          >
            {word}
          </Word>{' '}
        </>
      ))}
    </>
  );
};

const Word = ({ children, index, ...props }) => {
  const defaultProps = {
    smoothConfig: {
      scroll: scrollSmoothConfig,
    },
  };

  const animationConfig = {
    opacity: {
      useScrollConfig: {
        offset: ['2 1', '3 1'],
      },
      useScrollRes: 'scrollYProgress',
      prop: '--opacity',
      scrollPoints: [0, 1],
      propPoints: [0, 1],
    },
    y: {
      useScrollConfig: {
        offset: ['1 1', '4 1'],
      },
      propPoints: ['100%', '0%'],
    },
  };

  return (
    <ScrollAnimation
      config={animationConfig.opacity}
      {...defaultProps}
      {...props}
    >
      <ScrollAnimation.Transform
        className='opacity-[--opacity]'
        config={animationConfig.y}
        {...defaultProps}
      >
        <span>{children}</span>
      </ScrollAnimation.Transform>
    </ScrollAnimation>
  );
};

export default TextScrollAnimation;
