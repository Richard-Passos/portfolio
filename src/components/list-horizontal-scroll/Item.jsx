import { cn } from '@/utils';

import HorizontalScroll from '../horizontal-scroll';
import ScrollAnimation from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';

const ListHorizontalScrollItem = ({
  className,
  baseVelocity = 5,
  children,
  ...props
}) => {
  const clipPaths = {
    fromRight: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
    fromLeft: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
  };

  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '2 1'],
    },
    useScrollRes: 'scrollYProgress',
    prop: 'clipPath',
    scrollPoints: [0, 1],
    propPoints: clipPaths[baseVelocity >= 0 ? 'fromLeft' : 'fromRight'],
  };

  return (
    <ScrollAnimation
      config={animationConfig}
      smoothConfig={{ scroll: scrollSmoothConfig }}
    >
      <li
        className={cn(
          'border-y bg-main py-8 text-[clamp(1.5rem,4.5vw,2.5rem)] font-bold uppercase leading-none text-muted-content transition-colors odd:-rotate-[.5deg] even:rotate-[.5deg]',
          className,
        )}
        {...props}
      >
        {/* <HorizontalScroll
          baseVelocity={baseVelocity}
          className='outline-text [-webkit-text-stroke-width:theme(spacing.px)]'
        >
      </HorizontalScroll> */}
        {children}
      </li>
    </ScrollAnimation>
  );
};

export default ListHorizontalScrollItem;
