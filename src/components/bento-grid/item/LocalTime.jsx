import { cn } from '@/utils';

import LocalTime from '../../local-time';
import { Text } from '../../ui';
import Item from './Root';

const BentoGridItemLocalTime = ({ className, data = {}, ...props }) => {
  const { options = {} } = data;

  return (
    <Item
      className={cn('min-h-60 flex-col items-center justify-center', className)}
      {...props}
    >
      <Text.Subtitle className='text-xs uppercase text-muted-content'>
        {data.title}
      </Text.Subtitle>

      <Text className='text-[14vw]/none font-bold sm:text-[min(8vw,6rem)]/none'>
        <LocalTime {...options} />
      </Text>
    </Item>
  );
};

export default BentoGridItemLocalTime;
