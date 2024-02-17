import { cn } from '@/utils';

import Language from '../language';
import { MagneticLink } from '../link';
import Menu from '../menu';
import { Logo, Separator } from '../ui';
import { SheetTrigger } from '../ui/sheet';
import Nav from './Nav';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'py-sm relative z-10 mx-auto flex w-9/10 max-w-bounds flex-wrap items-center justify-between',
        className,
      )}
      {...props}
    >
      <Logo className='transition-none' />

      <div className='flex h-10 items-center max-sm:hidden'>
        <Nav />

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
