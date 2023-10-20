import { Logo } from '@/components';
import { cn } from '@/utils';

import Nav from './Nav';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'max-w-bounds absolute left-1/2 top-0 z-10 flex w-full -translate-x-1/2 items-center justify-between px-12 pt-8',
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
