'use client';

import { getLocalizedUrl, locales } from 'intlayer';
import { useLocale } from 'next-intlayer';
import NextLink from 'next/link';
import type { ComponentProps } from 'react';

import { MergeProps } from '@/types';
import { cn } from '@/utils';

export type LinkProps = MergeProps<{ disabled?: boolean }, ComponentProps<typeof NextLink>>;

export const Link = ({ href, disabled, className, ...props }: LinkProps) => {
  const { locale } = useLocale(),
    isExternal = href && !href.toString().startsWith('/'),
    targetUrl =
      isExternal || locales.includes(href.toString().substring(1)) // Is external or /pt -> pt in locales
        ? href
        : getLocalizedUrl(href.toString(), locale);

  return (
    <NextLink
      aria-disabled={disabled}
      href={disabled ? '' : targetUrl}
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
