import { NavigationMenu } from '@/components/ui';
import { pages } from '@/constants';
import { cn } from '@/utils';

import Link from '../link';

const HeaderNav = ({ className, ...props }) => {
  return (
    <NavigationMenu
      className={cn('gap-3', className)}
      {...props}
    >
      {pages.map(({ href, text }) => (
        <Link
          className='px-3'
          href={href}
          key={`Header navigation menu ${href}`}
        >
          {text}
        </Link>
      ))}
    </NavigationMenu>
  );
};

export default HeaderNav;
