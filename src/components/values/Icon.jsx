import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const ValuesIcon = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex size-12 items-center justify-center rounded-sm bg-muted',
      )}
      {...props}
    >
      <Slot className='size-1/2'>{children}</Slot>
    </div>
  );
};

export default ValuesIcon;
