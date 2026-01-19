'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps, useState } from 'react';

import { useUpdateEffect } from '@/hooks';
import { cn, normId } from '@/utils';

import HeaderNavLink, { HeaderNavLinkProps } from './Link';

type HeaderNavOrganismOwnProps = {
  items: { href: string; label: string }[];
  linkProps?: Partial<HeaderNavLinkProps>;
};

type HeaderNavOrganismProps = HeaderNavOrganismOwnProps &
  Omit<ComponentProps<'nav'>, keyof HeaderNavOrganismOwnProps>;

const HeaderNavOrganism = ({
  items,
  className,
  linkProps,
  ...props
}: HeaderNavOrganismProps) => {
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

export default HeaderNavOrganism;
export type { HeaderNavOrganismProps };
