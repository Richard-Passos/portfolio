'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils';

import { NavigationMenu } from '../ui/navigation-menu';
import Link from './Link';
import { useUpdateEffect } from '@/hooks';

const LOCALE_REGEX = /\/([a-z]{2})\/?([^/]+)?/i;

const HeaderNav = ({ className, items = [], ...props }) => {
  const     pathname = usePathname();

  const [currActive, setCurrActive] = useState(pathname)

    const locale = pathname.match(LOCALE_REGEX)?.[1]
    
    const getHref = (href = '') => `/${locale}${href === '/' ? '' : href}`

  const includesPathname = 
  items.some(({ data = {} }) => getHref(data.href) === pathname)

  useUpdateEffect(() => setCurrActive(pathname), [pathname])

  return (
    <NavigationMenu
      className={cn('group', className)}
      {...props}
    >
      {items.map(({ data = {} }) => ( 
          <Link
            isActive={getHref(data.href) === currActive}
            shouldHide={!includesPathname}
            key={data.href}
            onMouseEnter={() => setCurrActive(getHref(data.href))}
            onMouseLeave={() => {
              if(includesPathname) setCurrActive(pathname)
            }}
            {...data}
          >
            {data.label}
          </Link>
          ))}
    </NavigationMenu>
  );
};

export default HeaderNav;
