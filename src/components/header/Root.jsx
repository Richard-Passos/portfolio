import { cn } from '@/utils';

import { MagneticLink } from '../link';
import Menu from '../menu';
import { Logo } from '../ui';
import { SheetTrigger } from '../ui/sheet';
import Nav from './Nav';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'relative z-10 mx-auto flex w-[90%] max-w-bounds flex-wrap items-center justify-between py-[min(6vw,theme(spacing.6))]',
        className,
      )}
      {...props}
    >
      <Logo />

      <Nav className='-mr-4 max-sm:hidden' />

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
