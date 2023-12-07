import { cn } from '@/utils';

const BentoGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid w-[90%] max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2 md:w-[90%] lg:grid-cols-3',
        className,
      )}
      {...props}
    />
  );
};

export default BentoGrid;
