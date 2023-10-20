'use client';

import NextLink from 'next/link';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Link = ({ href, className, ...props }, ref) => {
  return (
    <NextLink
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-x-[--font-blank-space] font-semibold',
        className,
      )}
      href={href}
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(Link);
