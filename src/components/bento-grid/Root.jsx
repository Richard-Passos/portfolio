import { cn } from '@/utils';

const BentoGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid w-full max-w-screen-lg grid-cols-1 gap-4 p-1 sm:grid-cols-2 md:w-[90%] lg:grid-cols-3',
        className,
      )}
      {...props}
    />
  );
};

export default BentoGrid;
