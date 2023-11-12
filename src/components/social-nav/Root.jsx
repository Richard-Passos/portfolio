import { cn } from '@/utils';

const SocialNav = ({ className, ...props }) => {
  return (
    <nav
      className={cn('flex gap-3', className)}
      {...props}
    />
  );
};
export default SocialNav;
