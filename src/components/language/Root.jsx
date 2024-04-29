'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { locales, usePathname, useRouter } from '@/navigation';
import { cn } from '@/utils';

import { Select } from '../ui';
import { ChevronDownIcon, ChevronUpIcon } from '../ui/icon/icons';

const Language = ({ className, ...props }) => {
  const activeLocale = useLocale(),
    router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();

  return (
    <Select
      defaultValue={activeLocale}
      onValueChange={(locale) =>
        router.replace(`${pathname}?${searchParams}`, { locale })
      }
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
