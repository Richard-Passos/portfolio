import { cn } from '@/utils';

const Stats = ({ className, ...props }) => {
  return (
    <ul
      className={cn('grid mt-md gap-sm md:grid-cols-2', className)}
      {...props}
    />
  );
};

export default Stats;