import { Link } from '@/patterns';
import { capitalize, cn } from '@/utils';

const SocialNavItem = ({ name, className, href, ...props }) => {
  return (
    <Link
      className={cn('px-3 text-sm', className)}
      href={href}
      {...props}
    >
      {capitalize(name)}
    </Link>
  );
};

export default SocialNavItem;
