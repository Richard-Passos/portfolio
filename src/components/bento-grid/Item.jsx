import { cn } from '@/utils';

import ScrollAnimation from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';

const SCROLL_OFFSET = ['0 1', '1 1'];

const BentoGridItem = ({ className, ...props }) => {
  const animationConfig = {
      opacity: {
        useScrollConfig: {
          offset: SCROLL_OFFSET,
        },
        useScrollRes: 'scrollYProgress',
        prop: 'opacity',
        scrollPoints: [0, 1],
        propPoints: [0, 1],
      },
      y: {
        useScrollConfig: {
          offset: SCROLL_OFFSET,
        },
        propPoints: ['25%', '0%'],
      },
      rotate: {
        useScrollConfig: {
          offset: SCROLL_OFFSET,
        },
        prop: '--tw-rotate',
        propPoints: ['6.175deg', '0deg'],
      },
    },
    animationSmoothConfig = {
      scroll: scrollSmoothConfig,
    };

  return (
    <ScrollAnimation
      config={animationConfig.opacity}
      smoothConfig={animationSmoothConfig}
    >
      <ScrollAnimation.Transform
        config={animationConfig.y}
        smoothConfig={animationSmoothConfig}
      >
        <ScrollAnimation.Transform
          config={animationConfig.rotate}
          smoothConfig={animationSmoothConfig}
        >
          <li
            className={cn(
              'flex min-h-[theme(spacing.60)] flex-col justify-center gap-3 rounded-md border bg-main p-5 transition-bg',
              className,
            )}
            {...props}
          />
        </ScrollAnimation.Transform>
      </ScrollAnimation.Transform>
    </ScrollAnimation>
  );
};

export default BentoGridItem;
