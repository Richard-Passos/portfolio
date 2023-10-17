import { cn } from '@/utils';

const SocialNav = ({ className, ...props }) => {
  return (
    <nav
      className={cn('relative right-3 flex', className)}
      {...props}
    />
  );
};
export default SocialNav;
