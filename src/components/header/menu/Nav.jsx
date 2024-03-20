'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils';

import { NavigationMenu } from '../../ui/navigation-menu';
import Link from './Link';

const DEFAULT_IS_HOVER = undefined;

const HeaderMenuNav = ({ className, items, ...props }) => {
  const [isHover, setIsHover] = useState(DEFAULT_IS_HOVER),
    pathname = usePathname();

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
            key={href}
            onMouseEnter={() => setIsHover(i)}
            onMouseLeave={() => setIsHover(DEFAULT_IS_HOVER)}
          >
            {label}
          </Link>
        );
      })}
    </NavigationMenu>
  );
};

export default HeaderMenuNav;
