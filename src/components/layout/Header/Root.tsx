import data from './.data';

import { ComponentProps } from 'react';

import { Theme } from '@/components/misc/Theme';
import { MenuDrawer } from '@/components/modules/Drawer/variants/Menu';
import { Logo } from '@/components/navigation/Logo';
import { LocaleMenu } from '@/components/navigation/Menu/variants/Locale';
import { NavTabs } from '@/components/navigation/Tabs/variants/Nav';
import { cn } from '@/utils/cn';

export type HeaderProps = ComponentProps<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <Theme>
      <header
        className={cn(
          'relative z-20 flex w-full max-w-bounds flex-wrap items-center gap-4 bg-body px-[6%] py-5 text-body-emphasis sm:px-[4%]',
          'before:absolute before:inset-y-0 before:-z-50 before:w-screen before:bg-body',
          className
        )}
        {...props}
      >
        <Logo className='mr-auto' />

        <div className='ml-auto flex items-center gap-3 max-md:hidden'>
          <NavTabs
            id='header'
            items={data.nav}
          />

          <LocaleMenu />
        </div>

        <MenuDrawer nav={data.nav} />
      </header>
    </Theme>
  );
};
