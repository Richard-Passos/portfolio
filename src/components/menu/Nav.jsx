'use client';

import { useState } from 'react';

import { cn } from '@/utils';

import InfinityScroll from '../infinity-scroll';
import { MagneticLink } from '../link';

const MenuNav = ({ className, items = [], ...props }) => {
  const [isActive, setIsActive] = useState(undefined);

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center py-md sm:px-md',
        className,
      )}
      {...props}
    >
      <nav className='group relative z-10 flex w-9/10 max-w-xl flex-col justify-center'>
        {items.map(({ data = {} }, i) => (
          <div
            key={data.href}
            className='w-fit transition-[transform,opacity] [--opacity:.25] dark:[--opacity:.05] group-hover:[&:not(:hover)]:scale-x-95 group-hover:[&:not(:hover)]:opacity-[--opacity]'
          >
            <MagneticLink
              className='justify-start rounded-sm px-8 py-4 text-[13vw] font-extrabold uppercase tracking-tighter no-underline transition-none sm:text-7xl'
              limit={0.15}
              href={data.href}
              onMouseEnter={() => setIsActive(i)}
              onMouseLeave={() => setIsActive(undefined)}
            >
              {data.label}
            </MagneticLink>
          </div>
        ))}
      </nav>

      <ul
        aria-hidden
        className='absolute flex w-full items-center justify-center'
      >
        {items.map(({ data = {} }, i) => (
          <li
            className={cn(
              'absolute w-full text-[min(32vmin,16rem)]/none font-extrabold uppercase tracking-tighter text-muted transition-[transform,opacity] duration-300',
              isActive !== i && 'scale-y-75 opacity-0',
            )}
            key={`Infinity scroll ${data.href}`}
          >
            <InfinityScroll className='[--gap:.2em]'>
              <span>{data.label}</span> ·
            </InfinityScroll>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuNav;
