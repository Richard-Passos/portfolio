import { cn } from '@/utils';

const Values = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid gap-sm sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      {...props}
    />
  );
};

export default Values;
