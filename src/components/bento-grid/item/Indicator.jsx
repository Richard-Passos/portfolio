import { cn } from '@/utils';

import ScrollIndicator from '../../scroll-indicator';
import { Text } from '../../ui/text';
import Item from './Root';

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
