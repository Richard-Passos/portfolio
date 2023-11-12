import { cn } from '@/utils';

const SheetActions = ({ className, ...props }) => {
  return (
    <section
      aria-label='Actions'
      className={cn(
        'flex gap-2 max-sm:flex-col-reverse sm:justify-end',
        className,
      )}
      {...props}
    />
  );
};

export default SheetActions;
