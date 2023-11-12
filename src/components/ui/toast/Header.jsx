import { cn } from '@/utils';

const ToastHeader = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'space-y-2 max-sm:first:[&:has(~[aria-label=Close])>*]:pr-6',
        className,
      )}
      {...props}
    />
  );
};

export default ToastHeader;
