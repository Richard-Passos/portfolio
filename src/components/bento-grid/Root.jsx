import { cn } from '@/utils';

const BentoGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid gap-xs sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      {...props}
    />
  );
};

export default BentoGrid;
