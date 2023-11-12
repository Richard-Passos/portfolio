'use client';

import NextLink from 'next/link';
import { forwardRef } from 'react';

import { useIsExternalUrl } from '@/hooks';
import { cn } from '@/utils';

const Link = ({ href, className, ...props }, ref) => {
  const isExternal = useIsExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <NextLink
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-font-blank-space font-semibold underline-offset-4 hover:underline',
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
