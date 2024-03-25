import { cn } from '@/utils';

import ScrollAnimate from '../scroll-animate';

const SCROLL_OFFSET = ['0 1', '0 .55'];

const BentoGridItem = ({ className, ...props }) => {
  const animationConfig = {
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      scroll: 'scrollYProgress',
      scrollPoints: [0, 1],
      prop: 'opacity',
      propPoints: [0, 1],
    },
    y: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
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

  return (
    <ScrollAnimate config={animationConfig.opacity}>
      <ScrollAnimate.Transform config={animationConfig.y}>
        <ScrollAnimate.Transform config={animationConfig.rotate}>
          <li
            className={cn(
              'flex min-h-60 max-w-full flex-col justify-center gap-3 rounded-md border bg-main p-5 transition-bg',
              className,
            )}
            {...props}
          />
        </ScrollAnimate.Transform>
      </ScrollAnimate.Transform>
    </ScrollAnimate>
  );
};

export default BentoGridItem;
