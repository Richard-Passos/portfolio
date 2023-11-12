import { cn } from '@/utils';

const MenubarShortcut = ({ className, ...props }) => {
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

export default MenubarShortcut;
