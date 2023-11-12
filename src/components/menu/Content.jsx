import { pages } from '@/constants';

import { Link } from '../ui';
import { SheetContent } from '../ui/sheet';

const MenuContent = (props) => {
  return (
    <SheetContent {...props}>
      <nav className='flex flex-col gap-2'>
        {pages.map(({ href, text }) => (
          <Link
            className='h-20 w-full justify-start rounded-sm px-6 text-5xl transition-bg hover:bg-muted'
            href={href}
            key={href}
          >
            {text}
          </Link>
        ))}
      </nav>
    </SheetContent>
  );
};

export default MenuContent;
