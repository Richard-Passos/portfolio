'use client';

import NextLink from 'next/link';
import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn'; 

export type LinkProps = MergeProps<{ disabled?: boolean }, ComponentProps<typeof NextLink>>;

export const Link = ({ href, disabled, className, ...props }: LinkProps) => {
  const isExternal = !href.toString().startsWith('/');

  return (
    <NextLink
      aria-disabled={disabled ? true : undefined}
      href={disabled ? '' : href}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'inline-flex aria-disabled:cursor-not-allowed aria-disabled:opacity-60',
        className
      )}
      {...(isExternal && { rel: 'noreferrer', target: '_blank' })}
      {...props}
    />
  );
};
