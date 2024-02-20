import { cn } from '@/utils';

const ListHorizontalScroll = ({ className, ...props }) => {
  return (
    <ul
      className={cn('w-full', className)}
      {...props}
    />
  );
};

export default ListHorizontalScroll;
