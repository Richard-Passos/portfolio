'use client';

import { Button, ButtonProps } from '@/components/input/Button';
import { Link } from '@/components/navigation/Link';
import Menu, { MenuProps } from '@/components/navigation/Menu';
import { CheckIcon } from '@/components/system/Icon/Check';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

import data from './Root.data';
import { useLocale } from 'next-intlayer';
import { getHTMLTextDir, getLocaleName, getLocalizedUrl } from 'intlayer';

export type LocaleMenuProps = MergeProps<
  {
    wrapperProps?: MenuProps;
  },
  ButtonProps
>;

export const LocaleMenu = ({ wrapperProps, className, ...props }: LocaleMenuProps) => {
  const { locale, pathWithoutLocale, availableLocales, setLocale } = useLocale();

  return (
    <Menu {...wrapperProps}>
      <Menu.Trigger>
        <Button
          aria-label={data.label}
          className={cn(
            'min-w-32 justify-start border-border px-2.5 text-sm capitalize',
            className
          )}
          {...props}
        >
          <GlobeIcon className='size-[1.5em]' />

          {getLocaleName(locale)}
        </Button>
      </Menu.Trigger>

      <Menu.Content className='min-w-32'>
        {availableLocales.map((localeItem) => (
          <Menu.Item
            key={localeItem}
            value={localeItem}
          >
            <Button
              asChild
              size='sm'
              color='muted'
              className='justify-start text-start capitalize transition-none'
            >
              <Link
                href={getLocalizedUrl(pathWithoutLocale, localeItem)}
                hrefLang={localeItem}
                dir={getHTMLTextDir(localeItem)}
                onClick={() => setLocale(localeItem)}
              >
                {getLocaleName(localeItem)}

                {localeItem === locale && <CheckIcon className='ml-auto size-[1em]' />}
              </Link>
            </Button>
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu>
  );
};
