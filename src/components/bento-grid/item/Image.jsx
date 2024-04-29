import { cn } from '@/utils';

import { ScrollAnimateTransform } from '../../scroll-animate';
import { Image } from '../../ui';
import Item from './Root';

const ANIMATION_CONFIG = {
  prop: 'y',
  propPoints: ['-13%', '0%'],
};

const BentoGridItemImage = ({ className, data = {}, ...props }) => {
  return (
    <Item
      className={cn('w-full overflow-hidden bg-muted p-0', className)}
      {...props}
    >
      <ScrollAnimateTransform config={ANIMATION_CONFIG}>
        <Image
          className='h-[115%] w-full object-cover'
          {...data}
        />
      </ScrollAnimateTransform>
    </Item>
  );
};

export default BentoGridItemImage;
