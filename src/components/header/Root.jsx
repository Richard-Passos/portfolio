import { cn } from '@/utils';

const Header = ({ className, ...props }) => {
  return (
    <div
      className={cn('', className)}
      {...props}
    />
  );
};

export default Header;
