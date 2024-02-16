import { cn } from '@/utils';

const ServicesItem = ({ className, ...props }) => {
  return (
    <li
      className={cn('flex flex-col gap-4', className)}
      {...props}
    />
  );
};

export default ServicesItem;
