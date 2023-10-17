import { cn } from '@/utils';

const SocialNav = ({ className, ...props }) => {
  return (
    <nav
      className={cn('flex gap-6', className)}
      {...props}
    />
  );
};
export default SocialNav;
