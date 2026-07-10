import { ComponentProps } from 'react';

import { Theme } from '@/components/misc/Theme';
import { MenuDrawer } from '@/components/modules/Drawer/variants/Menu';
import { Logo } from '@/components/navigation/Logo';
import { LocaleMenu } from '@/components/navigation/Menu/variants/Locale';
import { NavTabs } from '@/components/navigation/Tabs/variants/Nav';
import { cn } from '@/utils/cn';

import data from './Root.data';

export type HeaderProps = ComponentProps<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <Theme>
      <header
        className={cn(
          'max-w-bounds relative z-20 flex w-full flex-wrap items-center gap-4 bg-body px-[6%] py-5 text-body-emphasis sm:px-[4%]',
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
