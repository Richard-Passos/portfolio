import { cn } from '@/utils';

import { ScrollAnimation } from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';

const TextScrollAnimationLine = ({ className, children, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['1.5 1', '3 1'],
    },
    useScrollRes: 'scrollYProgress',
    prop: '--bg-x-size',
    scrollPoints: [0, 1],
    propPoints: ['0%', '100%'],
  };

  return (
    <ScrollAnimation
      aria-hidden
      className={cn(
        'bg-[linear-gradient(hsl(var(--content)),hsl(var(--content)))] bg-no-repeat [--text-opacity:.1] [-webkit-text-fill-color:hsl(var(--content)/var(--text-opacity))] [background-clip:text] [background-size:var(--bg-x-size)_100%] dark:[--text-opacity:0.05]',
        className,
      )}
      config={animationConfig}
      smoothConfig={{ scroll: scrollSmoothConfig }}
      {...props}
    >
      <span>{children}</span>
    </ScrollAnimation>
  );
};

export default TextScrollAnimationLine;
