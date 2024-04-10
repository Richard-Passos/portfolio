import { cn } from '@/utils';

import Item from './Root'
import { Icon } from '../../ui';
import { Text } from '../../ui/text';

const BentoGridItemBold = ({ className, data = {}, ...props }) => {
  const {icon = {}} = data

  return (
    <Item
          className={cn('min-h-60 flex-col justify-between', className)}
          {...props}
        >
          <Icon {...icon} />

          <Text className='text-4xl font-medium'>
            {data.description}
          </Text>
        </Item>
  );
};

export default BentoGridItemBold;
