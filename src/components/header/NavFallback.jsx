import { pages } from '@/constants';

import { NavigationMenu } from '../ui/navigation-menu';
import Link from './Link';

const HeaderNavFallback = (props) => {
  return (
    <NavigationMenu {...props}>
      {pages.map(({ href, text }) => {
        return (
          <Link
            href={href}
            key={href}
          >
            {text}
          </Link>
        );
      })}
    </NavigationMenu>
  );
};

export default HeaderNavFallback;
