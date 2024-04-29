'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';

import { useUpdateEffect } from '@/hooks';
import { cn } from '@/utils';

import Link from './Link';

const HeaderNav = ({ className, items = [], ...props }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const segment = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const [active, setActive] = useState(segment);

  const includesSegment = items.some(({ data = {} }) => data.href === segment);

  useUpdateEffect(() => setActive(segment), [segment]);

  return (
    <nav
      className={cn(
        'group flex w-full max-w-max items-center justify-center',
        className,
      )}
      {...props}
    >
      {items.map(({ data = {} }) => (
        <Link
          isActive={active === data.href}
          shouldHide={!includesSegment}
          key={data.href}
          onMouseEnter={() => setActive(data.href)}
          onMouseLeave={() => {
            if (includesSegment) setActive(segment);
          }}
          {...data}
        >
          {data.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
