import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const ValuesIcon = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex aspect-square w-12 mb-6 items-center justify-center rounded-md bg-muted',
      )}
      {...props}
    >
      <Slot className='h-1/2 w-1/2'>{children}</Slot>
    </div>
  );
};

export default ValuesIcon;
