import { cn } from '@/utils';

import { Icon, Link, Text } from '../../ui';
import Item from './Root';

const BentoGridItemLink = ({ className, data = {}, ...props }) => {
  const { icon = {} } = data;

  return (
    <Item
      className={cn('min-h-60 border-none p-0', className)}
      {...props}
    >
      <Link
        className='hover:theme-primary flex size-full flex-col gap-1.5 rounded-inherit border bg-main p-sm no-underline transition-colors hover:focus-visible:outline-main'
        href={data.href}
        isExternal={data.isExternal}
      >
        <div className='mb-3 flex aspect-square h-10 items-center justify-center rounded-sm border transition-border'>
          <Icon
            className='size-6'
            {...icon}
          />
        </div>

        <Text className='text-center'>{data.title}</Text>

        <Text.Small className='text-center font-normal transition-color'>
          {data.href?.replace(
            /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/?\n]+).*/gim,
            '$1',
          )}
        </Text.Small>
      </Link>
    </Item>
  );
};

export default BentoGridItemLink;
