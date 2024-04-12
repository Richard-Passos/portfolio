import { cn } from '@/utils';

import HorizontalScroll from '../../horizontal-scroll';
import { ScrollAnimateTransform } from '../../scroll-animate';
import { Icon } from '../../ui';
import Item from './Root';

const ANIMATION_CONFIG = {
  rotate1: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '360deg'],
    transformConfig: { clamp: false },
  },
  rotate2: {
    scroll: 'scrollY',
    scrollPoints: [0, 400],
    prop: 'rotate',
    propPoints: ['0deg', '-360deg'],
    transformConfig: { clamp: false },
  },
};

const BentoGridItemHorizontalScroll = ({ className, data = {}, ...props }) => {
  const { icons = [] } = data;

  return (
    <Item
      className={cn('items-center p-xs', className)}
      {...props}
    >
      <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate1}>
        <div className='size-6'>
          <Icon
            className='size-full text-muted-content'
            {...icons[0]}
          />
        </div>
      </ScrollAnimateTransform>

      <HorizontalScroll
        baseVelocity={1.25}
        className='text-sm uppercase text-muted-content'
      >
        {data.description}&nbsp;
      </HorizontalScroll>

      <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate2}>
        <div className='size-6'>
          <Icon
            className='size-full text-muted-content'
            {...icons[1]}
          />
        </div>
      </ScrollAnimateTransform>
    </Item>
  );
};

export default BentoGridItemHorizontalScroll;
