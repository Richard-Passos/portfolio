import { Suspense } from 'react';

import { cn } from '@/utils';

import Language from '../language';
import { MagneticLink } from '../link';
import Menu from '../menu';
import { Logo, Separator } from '../ui';
import { SheetTrigger } from '../ui/sheet';
import Nav from './Nav';
import NavFallback from './NavFallback';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'relative z-10 mx-auto flex w-9/10 max-w-bounds flex-wrap items-center justify-between py-sm',
        className,
      )}
      {...props}
    >
      <Logo className='transition-none' />

      <div className='flex h-10 items-center max-sm:hidden'>
        <Suspense fallback={<NavFallback />}>
          <Nav />
        </Suspense>

        <Separator
          className='mr-4'
          orientation='vertical'
        />

        <Language />
      </div>

      <Menu>
        <MagneticLink asChild>
          <SheetTrigger className='-mr-4 h-10 rounded-sm px-4 sm:hidden'>
            Menu
          </SheetTrigger>
        </MagneticLink>
      </Menu>
    </header>
  );
};

export default Header;
