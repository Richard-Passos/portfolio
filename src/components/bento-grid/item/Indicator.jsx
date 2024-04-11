import { cn } from '@/utils';

import Item from './Root'
import { Text } from '../../ui/text';
import ScrollIndicator from '../../scroll-indicator';

const BentoGridItemIndicator = ({ className, data = {}, ...props }) => {
  return (
    <Item
          className={cn('flex-col justify-between', className)}
          {...props}
        >
          <Text className='first-letter:uppercase'>{data.description}</Text>

<ScrollIndicator className='ml-auto' />
        </Item>
  );
};

export default BentoGridItemIndicator;