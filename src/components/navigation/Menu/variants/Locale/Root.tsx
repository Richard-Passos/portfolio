'use client';

import { getHTMLTextDir, getLocaleName } from 'intlayer';
import { useLocale } from 'next-intlayer';

import { Button } from '@/components/input';
import { Link, Menu, MenuProps } from '@/components/navigation';
import { CheckIcon, GlobeIcon } from '@/components/system/icons';
import { cn } from '@/utils';

export type LocaleMenuProps = MenuProps;

export const LocaleMenu = (props: LocaleMenuProps) => {
  const { locale, availableLocales } = useLocale();

  return (
    <Menu {...props}>
      <Menu.Trigger asChild>
        <Button className='min-w-32 justify-start gap-2 border-border capitalize'>
          <GlobeIcon />

          {getLocaleName(locale)}
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content className='z-50 flex min-w-32 flex-col gap-0.5 rounded border bg-body p-1 shadow focus-visible:outline-hidden'>
          {availableLocales.map((localeItem) => {
            const isActive = localeItem === locale;
            console.log(localeItem);

            return (
              <Menu.Item
                value={localeItem}
                key={localeItem}
                asChild
              >
                <Button
                  asChild
                  size='sm'
                  data-active={isActive ? true : undefined}
                  className={cn(
                    'justify-start capitalize focus-visible:outline-hidden data-highlighted:bg-(--hover)'
                  )}
                >
                  <Link
                    replace // Will ensure that the "go back" browser button will redirect to the previous page
                    lang={localeItem}
                    dir={getHTMLTextDir(localeItem)}
                    href={`/${localeItem}`}
                  >
                    {isActive && <CheckIcon />}

                    {getLocaleName(localeItem)}
                  </Link>
                </Button>
              </Menu.Item>
            );
          })}
        </Menu.Content>
      </Menu.Positioner>
    </Menu>
  );
};
