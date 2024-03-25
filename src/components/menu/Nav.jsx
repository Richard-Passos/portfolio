'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils';

import { NavigationMenu } from '../ui/navigation-menu';
import Link from './Link';

const DEFAULT_IS_HOVER = undefined;

const MenuNav = ({ className, items = [], ...props }) => {
  const [isHover, setIsHover] = useState(DEFAULT_IS_HOVER),
    pathname = usePathname();

  const includesPathname = !!items.find(({ href }) => href === pathname);

  return (
    <NavigationMenu
      className={cn('w-9/10 max-w-none flex-col', className)}
      {...props}
    >
      {items?.map(({ href, label }, i) => {
        const isActive =
          isHover === i || (pathname === href && isHover === DEFAULT_IS_HOVER);

        return (
          <Link
            href={href}
            isActive={isActive}
            includesPathname={includesPathname}
            key={href}
            onMouseEnter={() => setIsHover(i)}
            onMouseLeave={() => {
              if (includesPathname) setIsHover(DEFAULT_IS_HOVER);
            }}
          >
            {label}
          </Link>
        );
      })}
    </NavigationMenu>
  );
};

export default MenuNav;
