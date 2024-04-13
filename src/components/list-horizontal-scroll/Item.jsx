import { cn } from '@/utils';

import HorizontalScroll from '../horizontal-scroll';
import { ScrollAnimate } from '../scroll-animate';

const CLIP_PATHS = {
    rtl: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
    ltr: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
  },
  ANIMATION_CONFIG = (dir) => ({
    scrollConfig: {
      offset: ['0 1', '0 .6'],
    },
    prop: 'clipPath',
    propPoints: CLIP_PATHS[dir],
  });

const ListHorizontalScrollItem = ({
  className,
  baseVelocity = 1,
  children,
  ...props
}) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG(baseVelocity >= 0 ? 'ltr' : 'rtl')}>
      <li
        className={cn(
          'relative flex items-center justify-center overflow-hidden border-y bg-main py-[.75em] text-[clamp(1.5rem,4.5vw,2.5rem)]/none font-bold uppercase odd:-rotate-[.5deg] even:rotate-[.5deg]',
          className,
        )}
        {...props}
      >
        <HorizontalScroll baseVelocity={baseVelocity}>
          {children}
        </HorizontalScroll>
      </li>
    </ScrollAnimate>
  );
};

export default ListHorizontalScrollItem;
