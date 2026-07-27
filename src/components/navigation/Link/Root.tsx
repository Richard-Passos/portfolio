'use client';

import NextLink from 'next/link';
import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { getLocalizedUrl } from 'intlayer';
import { useLocale } from 'next-intlayer';

export type LinkProps = MergeProps<{ disabled?: boolean }, ComponentProps<typeof NextLink>>;

export const Link = ({ href, hrefLang, disabled, className, ...props }: LinkProps) => {
  const { locale } = useLocale();
  const isExternal = !disabled && !/^(\/|#)/.test(href.toString());
  const hrefI18n = !hrefLang && !isExternal ? getLocalizedUrl(href.toString(), locale) : href;

  return (
    <NextLink
      aria-disabled={disabled ? true : undefined}
      href={disabled ? '#' : hrefI18n}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'inline-flex aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className
      )}
      {...(isExternal && { rel: 'noreferrer', target: '_blank' })}
      {...props}
      onClick={(ev) => {
        props.onClick?.(ev);
      }}
    />
  );
};
