import { Logo } from '@/components';
import { cn } from '@/utils';

import Nav from './Nav';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'absolute top-0 z-10 flex w-full items-center justify-between px-12 py-8',
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
