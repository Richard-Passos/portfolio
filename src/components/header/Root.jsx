import { Suspense } from 'react';

import { globalsApi } from '@/api';
import { cn } from '@/utils';

import DotsLoader from '../dots-loader';
import Language from '../language';
import Menu from '../menu';
import { Logo, Separator } from '../ui';
import Nav from './Nav';
import State from './State';

const Header = async ({ locale, className, ...props }) => {
  const { data = {} } = (await globalsApi.getOne('header', `?locale=${locale}`)).data || {};

  return (
    <State>
      <header
        className={cn(
          'relative z-10 flex w-[calc(var(--w)*.9)] flex-wrap items-center justify-between py-sm [--w:100vw] 2xl:[--w:--max-w]',
          className,
        )}
        {...props}
      >
        <Logo locale={locale} />

        <div className='flex h-10 items-center max-sm:hidden'>
          <Nav items={data.navItems} />

          <Separator
            className='mr-4'
            orientation='vertical'
          />

          <Suspense fallback={<DotsLoader />}>
            <Language />
          </Suspense>
        </div>

        <Menu locale={locale} />
      </header>
    </State>
  );
};

export default Header;
