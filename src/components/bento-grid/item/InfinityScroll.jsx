import { cn } from '@/utils';

import InfinityScroll from '../../infinity-scroll';
import { Badge, Icon } from '../../ui';
import { TextSubtitle } from '../../ui/text';
import Item from './Root';

const BentoGridItemInfinityScroll = ({ className, data = {}, ...props }) => {
  const { icon = {} } = data;

  return (
    <Item
      className={cn('min-h-60 flex-col gap-0 p-0', className)}
      {...props}
    >
      <Icon
        className='ml-sm mt-sm'
        {...icon}
      />

      <div className='my-auto flex flex-col items-center justify-center gap-sm'>
        <TextSubtitle className='text-center text-3xl font-bold'>
          {data.title}
        </TextSubtitle>

        <InfinityScroll
          as='ul'
          className='[--duration:7.5s] [--gap:theme(spacing.3)] hover:paused'
        >
          {data.items?.map((data, i) => (
            <Badge
              asChild
              className='px-3.5 py-1.5 text-sm'
              key={data}
              variants={{ color: i % 2 === 0 ? 'primary' : 'muted' }}
            >
              <li>{data}</li>
            </Badge>
          ))}
        </InfinityScroll>
      </div>
    </Item>
  );
};

export default BentoGridItemInfinityScroll;
