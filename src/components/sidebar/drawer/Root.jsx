import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <div
      aria-label='Drawer'
      className={cn(
        'group fixed top-0 z-50 min-h-screen w-full max-w-[--max-w] -translate-y-full bg-transparent duration-300 peer-checked:translate-y-0',
        className,
      )}
      {...props}
    />
  );
};

export default Root;
