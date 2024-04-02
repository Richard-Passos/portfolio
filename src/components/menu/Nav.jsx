'use client';

import { useContext, useState } from 'react';

import { MenuContext } from '@/contexts';
import { cn } from '@/utils';

import InfinityScroll from '../infinity-scroll';
import { MagneticLink } from '../link';

const MenuNav = ({ className, items = [], ...props }) => {
  const { toggleIsOpen } = useContext(MenuContext),
    [isActive, setIsActive] = useState(undefined);

  return (
    <div className={cn('w-full relative flex items-center justify-center p-md', className)} {...props}>
      <nav className='relative z-10 flex group justify-center flex-col w-9/10 max-w-xl'>
       {items?.map((data, i) => 
          <div key={data.href} className='[--opacity:.25] [body:not(:has(.dark-layout))_&]:[--opacity:.05] group-hover:[&:not(:hover)]:scale-x-95 group-hover:[&:not(:hover)]:opacity-[--opacity] w-fit transition-[transform,opacity]'>
            <MagneticLink
          className='justify-start rounded-sm px-8 py-4 text-7xl font-extrabold uppercase tracking-tighter no-underline'
          limit={0.15}
            href={data.href}
            onMouseEnter={() => setIsActive(i)}
            onMouseLeave={() => setIsActive(undefined)}
            onClick={toggleIsOpen}
          >
            {data.label}
          </MagneticLink>
          </div>
        )
      }
    </nav>

        
       
            <ul aria-hidden
               className='w-full absolute flex items-center justify-center'>
            {items.map((data, i) => <li className={cn('absolute w-full duration-300 transition-[transform,opacity] text-[min(32vmin,16rem)]/[1] font-extrabold uppercase tracking-tighter text-muted', isActive !== i && 'scale-y-75 opacity-0')}
            key={`Infinity scroll ${data.href}`}>
              <InfinityScroll
            className='[--gap:.2em]'
            
            >
              <span>{data.label}</span> ·
            </InfinityScroll>
            </li>)}
            </ul>
            </div>
  );
};

export default MenuNav;
