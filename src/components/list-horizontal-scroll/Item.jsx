import { cn } from '@/utils';

import HorizontalScroll from '../horizontal-scroll';

const ListHorizontalScrollItem = ({
  className,
  baseVelocity = 100,
  children,
  ...props
}) => {
  return (
    <li
      className={cn(
        'border-t py-8 text-[2.5rem] font-medium leading-none last:border-b',
        className,
      )}
      {...props}
    >
      <HorizontalScroll baseVelocity={baseVelocity}>
        {children}
      </HorizontalScroll>
    </li>
  );
};

export default ListHorizontalScrollItem;
