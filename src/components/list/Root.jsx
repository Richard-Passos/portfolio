import { cn } from '@/utils';

const List = ({ className, ...props }) => {
  return (
    <ul
      className={cn('w-full', className)}
      {...props}
    />
  );
};

export default List;
