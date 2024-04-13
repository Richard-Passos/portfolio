'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { languages } from '@/constants';
import { cn } from '@/utils';

import { Select } from '../ui';
import { ChevronDownIcon, ChevronUpIcon } from '../ui/icon/icons';

const DEFAULT_LANG = languages[0]?.toLowerCase(),
  LANG_REGEX = /\/[a-z]{2}(?![^/])/;

const Language = ({ className, ...props }) => {
  const router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();

  const lang = pathname.match(LANG_REGEX)?.[0].slice(1);

  const currLang = languages.find((data) => data === lang) || DEFAULT_LANG;

  const onChange = (lang) => {
    const pathnameWithReplacedLang = pathname.replace(
      LANG_REGEX,
      lang === DEFAULT_LANG ? '' : `/${lang}`,
    );

    const url = `${
      currLang === DEFAULT_LANG && lang !== DEFAULT_LANG
        ? '/' + lang + pathname
        : pathnameWithReplacedLang
    }?${searchParams}`;

    router.push(url, {
      scroll: false,
    });
  };

  return (
    <Select
      defaultValue={currLang}
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
          {languages.map((lang) => (
            <LanguageSelectItem
              key={lang}
              value={lang.toLowerCase()}
            >
              {lang}
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
