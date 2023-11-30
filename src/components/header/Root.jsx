import { cn } from '@/utils';

import Magnetic from '../magnetic';
import Menu from '../menu';
import { Logo } from '../ui';
import { SheetTrigger } from '../ui/sheet';
import Nav from './Nav';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'absolute left-1/2 top-0 z-10 flex w-full max-w-bounds -translate-x-1/2 flex-wrap items-center justify-between px-3 pt-4 sm:px-12',
        className,
      )}
      {...props}
    >
      <Logo />

      <Nav className='max-sm:hidden' />

      <Menu>
        <Magnetic limit={0.35}>
          <SheetTrigger className='h-10 rounded-sm transition-colors hover:bg-muted sm:hidden'>
            <Magnetic limit={0.25}>
              <span className='flex h-full items-center rounded-inherit px-4'>
                Menu
              </span>
            </Magnetic>
          </SheetTrigger>
        </Magnetic>
      </Menu>
    </header>
  );
};

export default Header;
