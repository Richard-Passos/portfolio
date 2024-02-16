import { cn } from '@/utils';

const Values = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'max-md:space-y-sm md:grid md:grid-cols-3 md:gap-sm lg:grid-cols-4',
        className,
      )}
      {...props}
    />
  );
};

export default Values;
