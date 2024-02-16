import { cn } from '@/utils';

const BentoGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'w-9/10 md:w-9/10 grid max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      {...props}
    />
  );
};

export default BentoGrid;
