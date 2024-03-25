import { cn } from '@/utils';
import Portal from '../portal';

const MenuPortal = ({ className, ...props }) => {
  return (
    <Portal
    className={cn('fixed inset-0 pointer-events-none z-50', className)}
    {...props}
/>
  );
};

export default MenuPortal;