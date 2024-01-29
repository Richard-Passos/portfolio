'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { pages } from '@/constants';

import { NavigationMenu } from '../ui/navigation-menu';
import Link from './Link';

const DEFAULT_IS_HOVER = undefined;

const HeaderNav = (props) => {
  const [isHover, setIsHover] = useState(DEFAULT_IS_HOVER),
    pathname = usePathname();

  return (
    <NavigationMenu {...props}>
      {pages.map(({ href, text }, i) => {
        const isActive =
          isHover === i || (pathname === href && isHover === DEFAULT_IS_HOVER);

        return (
          <Link
            href={href}
            isActive={isActive}
            key={href}
            onMouseEnter={() => setIsHover(i)}
            onMouseLeave={() => setIsHover(DEFAULT_IS_HOVER)}
          >
            {text}
          </Link>
        );
      })}
    </NavigationMenu>
  );
};

export default HeaderNav;
