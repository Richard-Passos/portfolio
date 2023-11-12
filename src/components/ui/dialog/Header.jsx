import { cn } from '@/utils';

const DialogHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn('space-y-2', className)}
      {...props}
    />
  );
};

export default DialogHeader;
