import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const AlertIcon = ({ className, ...props }) => {
  return (
    <Slot
      className={cn(
        'absolute left-4 top-4 text-foreground [&~*]:pl-7',
        className,
      )}
      {...props}
    />
  );
};

export default AlertIcon;
