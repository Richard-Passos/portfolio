import { cn } from '@/utils';

import { Icon, Text } from '../../ui';
import Item from './Root';

const BentoGridItemValue = ({ className, data = {}, ...props }) => {
  return (
    <Item
      className={cn('flex-col', className)}
      {...props}
    >
      <div
        className={cn(
          'flex size-12 items-center justify-center rounded-sm bg-muted',
        )}
        {...props}
      >
        <Icon
          className='size-1/2'
          {...data.icon}
        />
      </div>

      <Text.Title className='mt-6 text-2xl first-letter:uppercase'>
        {data.title}
      </Text.Title>

      <Text className='mt-2 text-muted-content first-letter:uppercase'>
        {data.description}
      </Text>
    </Item>
  );
};

export default BentoGridItemValue;
