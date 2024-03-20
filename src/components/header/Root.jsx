import { Suspense } from 'react';

import { cn } from '@/utils';

import DotsLoader from '../dots-loader';
import Language from '../language';
import Menu from './menu';
import { Logo, Separator } from '../ui';
import Nav from './Nav';
import { globalsApi } from '@/api';

const Header = async ({ className, ...props }) => {
  const header = (await globalsApi.getOne('header')) || {}

  return (
    <header
      className={cn(
        'relative z-10 flex min-h-[--header-h] w-9/10 max-w-bounds flex-wrap items-center justify-between',
        className,
      )}
      {...props}
    >
      <Logo className='transition-none' />

      <div className='flex h-10 items-center max-sm:hidden'>
        <Nav items={header.navItems} />

        <Separator
          className='mr-4'
          orientation='vertical'
        />

        <Suspense fallback={<DotsLoader />}>
          <Language />
        </Suspense>
      </div>

      <Menu/>
    </header>
  );
};

export default Header;
