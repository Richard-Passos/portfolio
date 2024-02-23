import { cn } from '@/utils';

const Services = ({ className, ...props }) => {
  return (
    <ul
      className={cn('space-y-md', className)}
      {...props}
    />
  );
};

export default Services;
