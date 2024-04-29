import { cn } from '@/utils';

import { Icon } from '../../ui';
import Item from './Root';

const BentoGridItemIcons = ({ className, data = [], ...props }) => {
  return (
    <Item
      className={cn('min-h-14 items-end justify-center p-0', className)}
      {...props}
    >
      {data?.map((icon) => (
        <div
          key={icon.src}
          className='aspect-square w-1/3 transition-transform first:-translate-x-full last:translate-x-full odd:absolute odd:bottom-0 odd:translate-y-[70%] even:-mb-[15%] hover:-translate-y-[15%] odd:hover:translate-y-1/2'
        >
          <Icon
            className='size-full text-muted'
            {...icon}
          />
        </div>
      ))}
    </Item>
  );
};

export default BentoGridItemIcons;
