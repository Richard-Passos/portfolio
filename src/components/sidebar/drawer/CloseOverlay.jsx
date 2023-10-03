import { cn } from '@/utils';

import { Toggle } from '../../toggle';
import { STATE_ID } from '../Root';

const CloseOverlay = ({ className, ...props }) => {
  return (
    <Toggle
      className={cn('bg-neutral absolute h-full w-full opacity-25', className)}
      htmlFor={STATE_ID}
      tabIndex={-1}
      {...props}
    />
  );
};

export default CloseOverlay;
