import { cn } from '@/utils';

const ListHorizontalScroll = ({ className, ...props }) => {
  return (
    <ul
      className={cn('w-full max-w-bounds', className)}
      {...props}
    />
  );
};

export default ListHorizontalScroll;
