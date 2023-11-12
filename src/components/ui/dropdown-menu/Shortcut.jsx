import { cn } from '@/utils';

const DropdownMenuShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-content',
        className,
      )}
      {...props}
    />
  );
};

export default DropdownMenuShortcut;
