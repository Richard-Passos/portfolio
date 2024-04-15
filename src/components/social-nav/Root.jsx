import { cn } from '@/utils';

const SocialNav = ({ className, ...props }) => {
  return (
    <nav
      className={cn('grid gap-2', className)}
      {...props}
    />
  );
};

export default SocialNav;
