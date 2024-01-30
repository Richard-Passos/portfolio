import { cn } from '@/utils';

import HorizontalScroll from '../horizontal-scroll';
import { ScrollAnimation } from '../scroll-animation';

const CLIP_PATHS = {
  fromRight: 'inset(0 0 0 var(--size))',
  fromLeft: 'inset(0 var(--size) 0 0)',
};

const ListHorizontalScrollItem = ({
  className,
  baseVelocity = 1,
  children,
  style,
  ...props
}) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '0 .6'],
    },
    useScrollRes: 'scrollYProgress',
    prop: '--size',
    scrollPoints: [0, 1],
    propPoints: ['100%', '0%'],
  };

  return (
    <ScrollAnimation config={animationConfig}>
      <li
        className={cn(
          'relative flex items-center justify-center border-y bg-main py-8 text-[clamp(1.5rem,4.5vw,2.5rem)]/[1] font-bold uppercase transition-colors odd:-rotate-[.5deg] even:rotate-[.5deg]',
          className,
        )}
        style={{
          clipPath: CLIP_PATHS[baseVelocity >= 0 ? 'fromLeft' : 'fromRight'],
          ...style,
        }}
        {...props}
      >
        <HorizontalScroll baseVelocity={baseVelocity}>
          {children}
        </HorizontalScroll>
      </li>
    </ScrollAnimation>
  );
};

export default ListHorizontalScrollItem;
