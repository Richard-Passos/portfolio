import { cn } from '@/utils';

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      aria-label='Skeleton'
      className={cn('animate-pulse rounded-md bg-muted-content/25', className)}
      {...props}
    />
  );
};

export default Skeleton;
