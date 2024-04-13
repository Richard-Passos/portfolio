import { cn } from '@/utils';

const Stats = ({ className, ...props }) => {
  return (
    <ul
      className={cn('grid gap-sm md:grid-cols-2', className)}
      {...props}
    />
  );
};

export default Stats;
