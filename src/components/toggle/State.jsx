import { cn } from '@/utils';

const State = ({ className, ...props }) => {
  return (
    <input
      className={cn('peer hidden', className)}
      type='checkbox'
      {...props}
    />
  );
};

export default State;
