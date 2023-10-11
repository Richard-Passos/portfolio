'use client';

import NextLink from 'next/link';
import { forwardRef } from 'react';

import { cn, isExternalUrl } from '@/utils';

const Link = ({ href, className, ...props }, ref) => {
  const isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  props = {
    className: cn(
      'cursor-pointer font-bold inline-flex items-center justify-center',
      className,
    ),
    href,
    ref,
    ...(isExternal ? externalLinkProps : {}),
    ...props,
  };

  return <NextLink {...props} />;
};

export default forwardRef(Link);
