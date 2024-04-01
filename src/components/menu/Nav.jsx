'use client';

import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

import { NavigationMenu } from '../ui/navigation-menu';
import Link from './Link';

const DEFAULT_IS_HOVER = undefined;

const MenuNav = ({ items = [], ...props }) => {
  const { toggleIsOpen } = useContext(MenuContext),
    [isHover, setIsHover] = useState(DEFAULT_IS_HOVER),
    pathname = usePathname();

  const includesPathname = !!items.find(({ href }) => href === pathname);

  return (
    <NavigationMenu {...props}>
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
            onClick={toggleIsOpen}
          >
            {label}
          </Link>
        );
      })}
    </NavigationMenu>
  );
};

export default MenuNav;
