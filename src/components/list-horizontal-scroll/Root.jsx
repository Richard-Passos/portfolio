import { cn } from '@/utils';

const ListHorizontalScroll = ({ className, ...props }) => {
  return (
    <ul
      className={cn('w-full overflow-x-clip', className)}
      {...props}
    />
  );
};

export default ListHorizontalScroll;
