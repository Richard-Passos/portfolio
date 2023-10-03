import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const AlertDialogFooter = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={cn(
        'flex max-sm:flex-col-reverse max-sm:space-y-2 sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    />
  );
};

export default AlertDialogFooter;
