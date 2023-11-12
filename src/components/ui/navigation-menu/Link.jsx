'use client';

import { Link as RadixLink } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { useIsExternalUrl } from '@/hooks';

import Link from '../link';

const NavigationMenuLink = ({ href, ...props }, ref) => {
  const isExternal = useIsExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Link
      href={href}
      legacyBehavior
      passHref
    >
      <RadixLink
        ref={ref}
        {...(isExternal && externalLinkProps)}
        {...props}
      />
    </Link>
  );
};

export default forwardRef(NavigationMenuLink);
