import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const AlertDialogHeader = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={cn('flex flex-col space-y-2 max-sm:text-center', className)}
      {...props}
    />
  );
};

export default AlertDialogHeader;
