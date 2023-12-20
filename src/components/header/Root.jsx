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
        'mx-auto flex w-[90%] max-w-bounds flex-wrap items-center justify-between pt-4 sm:pt-8',
        className,
      )}
      {...props}
    >
      <Logo />

      <Nav className='max-sm:hidden' />

      <Menu>
        <Magnetic limit={0.35}>
          <SheetTrigger className='h-10 rounded-sm font-semibold transition-colors hover:bg-muted sm:hidden'>
            <Magnetic limit={0.15}>
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
