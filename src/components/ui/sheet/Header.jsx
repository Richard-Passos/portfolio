import { cn } from '@/utils';

const SheetHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'flex flex-col gap-y-2 max-sm:items-center max-sm:text-center',
        className,
      )}
      {...props}
    />
  );
};
export default SheetHeader;
