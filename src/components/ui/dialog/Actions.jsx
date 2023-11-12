import { cn } from '@/utils';

const DialogActions = ({ className, ...props }) => {
  return (
    <section
      aria-label='Actions'
      className={cn('flex justify-end', className)}
      {...props}
    />
  );
};

export default DialogActions;
