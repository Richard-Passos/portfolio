import data from './Root.data';

import { type ComponentProps } from 'react';

import { Theme } from '@/components/misc/Theme';
import { Logo } from '@/components/navigation/Logo';
import { LocaleMenu } from '@/components/navigation/Menu/variants/Locale';
import { NavTabs } from '@/components/navigation/Tabs/variants/Nav';
import { cn } from '@/utils/cn';
import { MenuDrawer } from '@/components/modules/Drawer/variants/Menu';

export type HeaderProps = ComponentProps<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <Theme>
      <header
        className={cn(
          'bg-body text-body-emphasis relative max-w-bounds flex w-full flex-wrap items-center px-[6%] py-5 sm:px-[4%] gap-4 z-20',
          className
        )}
        {...props}
      >
        <Logo />

        <div className='ml-auto flex items-center gap-3 max-md:hidden'>
          <NavTabs id='header' items={data.nav} />

          <LocaleMenu />
        </div>

        <MenuDrawer nav={data.nav} />
      </header> 
    </Theme>
  );
};
