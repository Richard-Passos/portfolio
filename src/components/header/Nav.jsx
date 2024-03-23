'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';


import { NavigationMenu } from '../ui/navigation-menu';
import Link from './Link';
import { cn } from '@/utils';

const DEFAULT_IS_HOVER = undefined;

const HeaderNav = ({className, items = [], ...props}) => {
  const [isHover, setIsHover] = useState(DEFAULT_IS_HOVER),
  pathname = usePathname();

    const includesPathname = !!items.find(({href}) => href === pathname)

  return (
    <NavigationMenu className={cn('group', className)} {...props}>
      {items.map(({ href, label }, i) => {
        const isActive =
          isHover === i || (pathname === href && isHover === DEFAULT_IS_HOVER);

        return (
          <Link
            href={href}
            isActive={isActive}
            includesPathname={includesPathname}
            key={href}
            onMouseEnter={() => setIsHover(i)}
            onMouseLeave={() => {if(includesPathname) setIsHover(DEFAULT_IS_HOVER)}}
          >
            {label}
          </Link>
        );
      })}
    </NavigationMenu>
  );
};

export default HeaderNav;
