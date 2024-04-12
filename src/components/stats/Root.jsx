import { cn } from '@/utils';

const Stats = ({ className, ...props }) => {
  return (
    <ul
      className={cn('mt-md grid gap-sm md:grid-cols-2', className)}
      {...props}
    />
  );
};

export default Stats;
