'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { locales } from '@/constants';
import { cn } from '@/utils';

import { Select } from '../ui';
import { ChevronDownIcon, ChevronUpIcon } from '../ui/icon/icons';

const DEFAULT_LOCALE = locales[0],
  LOCALE_REGEX = /\/([a-z]{2})\/?([^/]+)?/i;

const Language = ({ className, ...props }) => {
  const router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();
    
  const locale = pathname.match(LOCALE_REGEX)?.[1]

  const currLocale = locales.find((data) => data === locale) || DEFAULT_LOCALE;

  const onChange = (locale) => {
    const pathnameWithReplacedLocale = pathname.replace(
      LOCALE_REGEX,
      `/${locale}/$2`,
    );

    const url = `${pathnameWithReplacedLocale}?${searchParams}`;

    router.push(url, {
      scroll: false,
    });
  };

  return (
    <Select
      defaultValue={currLocale}
      onValueChange={onChange}
      {...props}
    >
      <Select.Trigger
        className={cn(
          'h-8 w-12 justify-center gap-1 px-0 lowercase transition-none',
          className,
        )}
      >
        <Select.Value />

        <Select.Icon
          asChild
          className='h-2.5 w-2.5 transition-transform duration-300 group-data-open:rotate-180'
        >
          <ChevronDownIcon className='h-2.5 w-2.5' />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content>
        <Select.Viewport>
          {locales.map((locale) => (
            <LanguageSelectItem
              key={locale}
              value={locale.toLowerCase()}
            >
              {locale}
            </LanguageSelectItem>
          ))}
        </Select.Viewport>

        <Select.ScrollButton.Up>
          <ChevronUpIcon className='h-3.5 w-3.5' />
        </Select.ScrollButton.Up>

        <Select.ScrollButton.Down>
          <ChevronDownIcon className='h-3.5 w-3.5' />
        </Select.ScrollButton.Down>
      </Select.Content>
    </Select>
  );
};

const LanguageSelectItem = ({ className, children, ...props }) => {
  return (
    <Select.Item
      className={cn('justify-center pl-0 pr-0 lowercase', className)}
      {...props}
    >
      <Select.Item.Text>{children}</Select.Item.Text>
    </Select.Item>
  );
};

export default Language;
