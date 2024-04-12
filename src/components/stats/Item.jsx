import { cn } from '@/utils';

import { ScrollAnimate } from '../scroll-animate';

const SCROLL_OFFSET = ['0 1', '0 .55'],
  ANIMATION_CONFIG = {
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: 'opacity',
      propPoints: [0, 1],
    },
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--x',
      propPoints: ['-25%', '0%'],
    },
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--rotate',
      propPoints: ['-12deg', '0deg'],
    },
  };

const StatsItem = ({ className, ...props }) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.opacity}>
      <ScrollAnimate config={ANIMATION_CONFIG.x}>
        <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
          <li
            className={cn(
              'flex h-fit w-full translate-x-[--x] rotate-[--rotate] flex-col justify-between gap-sm rounded-md border bg-main p-sm shadow-md even:-translate-x-[--x] even:-rotate-[--rotate] sm:p-md md:even:mt-lg dark:shadow-none md:[&:not(:last-child)]:even:-mb-lg',
              className,
            )}
            {...props}
          />
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default StatsItem;
