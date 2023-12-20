'use client';

import { Slot } from '@radix-ui/react-slot';
import NextLink from 'next/link';
import { forwardRef } from 'react';

import { useIsExternalUrl } from '@/hooks';
import { cn } from '@/utils';

const Link = ({ href, asChild, className, ...props }, ref) => {
  const isExternal = useIsExternalUrl(href);

  const Tag = asChild ? Slot : NextLink,
    externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Tag
      className={cn(
        'inline-flex cursor-pointer items-center justify-center font-semibold underline decoration-transparent underline-offset-0 transition-[color,background-color,border-color,text-decoration-color,text-underline-offset] hover:decoration-current hover:underline-offset-4',
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
