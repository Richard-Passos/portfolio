import { cn } from '@/utils';

import { Logo } from '../ui';
import Nav from './Nav';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'absolute left-1/2 top-0 z-10 flex w-full max-w-bounds -translate-x-1/2 items-center justify-between px-12 pt-8',
        className,
      )}
      {...props}
    >
      <Logo />

      <Nav />
    </header>
  );
};

export default Header;
