import { cn } from '@/utils';

import { Icon } from '../../ui';
import { Text } from '../../ui/text';
import Item from './Root';

const BentoGridItemSimple = ({ className, data = {}, ...props }) => {
  const { icon = {} } = data;

  return (
    <Item
      className={cn('flex-col justify-between', className)}
      {...props}
    >
      <Icon
        className='size-6'
        {...icon}
      />

      <Text className='font-medium leading-tight text-muted-content'>
        {data.description}
      </Text>
    </Item>
  );
};

export default BentoGridItemSimple;
