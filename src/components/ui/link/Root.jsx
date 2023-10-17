'use client';

import NextLink from 'next/link';
import { forwardRef } from 'react';

import { cn, isExternalUrl } from '@/utils';

const Link = ({ href, className, ...props }, ref) => {
  const isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <NextLink
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-[.25em] font-semibold',
        className,
      )}
      href={href}
      ref={ref}
      {...(isExternal && externalLinkProps)}
      {...props}
    />
  );
};
export default forwardRef(Link);
