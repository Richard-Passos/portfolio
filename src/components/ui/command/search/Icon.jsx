import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const CommandSearchIcon = ({ className, ...props }) => {
  return (
    <Slot
      className={cn(
        'pointer-events-none absolute left-[.9375rem] h-[1.125rem] w-[1.125rem] text-content/50',
        className,
      )}
      {...props}
    />
  );
};

export default CommandSearchIcon;
