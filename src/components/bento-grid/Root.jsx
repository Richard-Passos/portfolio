import { cn } from '@/utils';

const BentoGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn('grid w-full max-w-screen-lg grid-cols-3 gap-4', className)}
      {...props}
    />
  );
};

export default BentoGrid;
