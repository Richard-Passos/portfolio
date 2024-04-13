'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils';

import { NavigationMenu } from '../ui/navigation-menu';
import Link from './Link';

const DEFAULT_IS_HOVER = undefined;

const HeaderNav = ({ className, items = [], ...props }) => {
  const [isHover, setIsHover] = useState(DEFAULT_IS_HOVER),
    pathname = usePathname();

  const includesPathname = items.some(({ data }) => data.href === pathname);

  return (
    <NavigationMenu
      className={cn('group', className)}
      {...props}
    >
      {items.map(({ data = {} }, i) => {
        const isActive =
          isHover === i || (pathname === data.href && isHover === DEFAULT_IS_HOVER);

        return (
          <Link
            href={data.href}
            isActive={isActive}
            includesPathname={includesPathname}
            key={data.href}
            onMouseEnter={() => setIsHover(i)}
            onMouseLeave={() => {
              if (includesPathname) setIsHover(DEFAULT_IS_HOVER);
            }}
            {...data}
          >
            {data.label}
          </Link>
        );
      })}
    </NavigationMenu>
  );
};

export default HeaderNav;
