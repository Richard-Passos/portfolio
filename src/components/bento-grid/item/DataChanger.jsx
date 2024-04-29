import { cn } from '@/utils';

import { MagneticButton } from '../../button';
import DataChanger from '../../data-changer';
import { Icon, Text } from '../../ui';
import Item from './Root';

const BentoGridItemDataChanger = ({ className, data = {}, ...props }) => {
  const { action = {} } = data;
  return (
    <DataChanger
      asChild
      lastIdx={data.items?.length - 1}
    >
      <Item
        className={cn('items-center p-xs', className)}
        {...props}
      >
        <DataChanger.Action asChild>
          <MagneticButton
            className='h-12 shrink-0 [&_svg]:size-[40%]'
            {...action.data}
            variants={{ color: 'muted', size: 'sm', ...action.data?.variants }}
          >
            <Icon {...action.icon} />
          </MagneticButton>
        </DataChanger.Action>

        {data.items?.map((data, i) => (
          <DataChanger.Item
            idx={i}
            key={data.title + i}
          >
            <Text.Title className='text-sm uppercase transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {data.title}
            </Text.Title>

            <Text className='line-clamp-1 text-sm text-muted-content transition-[clip-path] [clip-path:inset(100%_0_0_0)] first-letter:uppercase group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {data.description}
            </Text>
          </DataChanger.Item>
        ))}

        <DataChanger.Timerbar className='absolute inset-x-0 bottom-0 w-auto' />
      </Item>
    </DataChanger>
  );
};

export default BentoGridItemDataChanger;
