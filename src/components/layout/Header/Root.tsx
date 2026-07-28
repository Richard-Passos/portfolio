import { ComponentProps } from 'react';

import { Theme } from '@/components/misc/Theme';
import MenuDrawer from '@/components/modules/Drawer/Menu';
import { Logo } from '@/components/navigation/Logo';
import LocaleMenu from '@/components/navigation/Menu/Locale';
import { cn } from '@/utils/cn';
import { MagneticLink } from '@/components/navigation/Link/Magnetic';
import { useIntlayer } from 'next-intlayer/server';

export type HeaderProps = ComponentProps<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  const t = useIntlayer('header');

  return (
    <Theme>
      <header
        className={cn(
          'relative isolate z-20 flex w-full max-w-bounds flex-wrap items-center justify-center gap-4 px-[5%] py-5 text-body-emphasis',
          'before:absolute before:inset-y-0 before:-z-50 before:w-[200dvw] before:bg-body',
          className
        )}
        {...props}
      >
        <Logo className='mr-auto' />

        <div className='ml-auto flex items-center gap-3 max-md:hidden'>
          <nav className='flex flex-wrap'>
            {t.nav.map((el) => (
              <MagneticLink
                key={el.url}
                href={el.url}
                className='rounded-none'
              >
                {el.label}
              </MagneticLink>
            ))}
          </nav>

          <LocaleMenu>
            <LocaleMenu.Trigger />

            <LocaleMenu.Content />
          </LocaleMenu>
        </div>

        <MenuDrawer>
          <MenuDrawer.Trigger className='md:hidden' />

          <MenuDrawer.ScrollTrigger />

          <MenuDrawer.Content />
        </MenuDrawer>
      </header>
    </Theme>
  );
};
