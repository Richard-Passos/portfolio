import { cn } from '@/utils';

import HorizontalScroll from '../horizontal-scroll';
import { ScrollAnimationTransform } from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';

const ListHorizontalScrollItem = ({
  className,
  baseVelocity = 100,
  children,
  ...props
}) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['1 1', '5 1'],
    },
    propPoints: ['-100%', '0%'],
  };

  return (
    <li
      className={cn(
        'border-t bg-main py-4 text-[2.5rem] font-medium uppercase leading-none transition-bg last:border-b',
        className,
      )}
      {...props}
    >
      <div className='h-full overflow-hidden py-4'>
        <ScrollAnimationTransform
          config={animationConfig}
          smoothConfig={{ scroll: scrollSmoothConfig }}
        >
          <HorizontalScroll baseVelocity={baseVelocity}>
            {children}
          </HorizontalScroll>
        </ScrollAnimationTransform>
      </div>
    </li>
  );
};

export default ListHorizontalScrollItem;
