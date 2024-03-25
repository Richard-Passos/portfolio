import { cn } from '@/utils';

import Portal from '../portal';

const MenuPortal = ({ className, ...props }) => {
  return (
    <Portal
      className={cn('pointer-events-none fixed inset-0 z-50', className)}
      {...props}
    />
  );
};

export default MenuPortal;
