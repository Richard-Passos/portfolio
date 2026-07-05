'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps, useState } from 'react';

import { useUpdateEffect } from '@/hooks';
import { MergeProps } from '@/types';
import { cn, normId } from '@/utils';

import HeaderNavLink, { HeaderNavLinkProps } from './Link';

type HeaderNavOwnProps = {
  items: { href: string; label: string }[];
  linkProps?: Partial<HeaderNavLinkProps>;
};

type HeaderNavProps = MergeProps<HeaderNavOwnProps, ComponentProps<'nav'>>;

const HeaderNav = ({
  items,
  className,
  linkProps,
  ...props
}: HeaderNavProps) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const segment = selectedLayoutSegment
    ? `/${normId(selectedLayoutSegment)}`
    : '/';

  const [active, setActive] = useState(segment);

  const includesSegment = items.some((data) => data.href === segment);

  useUpdateEffect(() => setActive(segment), [segment]);

  return (
    <nav
      className={cn(
        'group/nav flex w-full max-w-max items-center justify-center',
        className
      )}
      {...props}
    >
      {items.map((data) => (
        <HeaderNavLink
          href={data.href}
          isActive={active === data.href}
          key={data.href}
          onMouseEnter={() => {
            setActive(data.href);
          }}
          onMouseLeave={() => {
            if (includesSegment) setActive(segment);
          }}
          {...linkProps}
          indicatorProps={{
            shouldHide: !includesSegment,
            ...linkProps?.indicatorProps
          }}
        >
          {data.label}
        </HeaderNavLink>
      ))}
    </nav>
  );
};

export { HeaderNav };
export type { HeaderNavProps };
