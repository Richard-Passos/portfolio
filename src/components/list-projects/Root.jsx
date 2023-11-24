'use client';

/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';

import { ListProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { Image } from '../ui';
import { CursorArea } from '../ui/cursor';
import { FollowPointer } from '../ui/follow-pointer';

const ListProjects = ({ className, children, images, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(undefined);

  const followPointerId = 'follow-pointer-projects-img';

  return (
    <ListProjectsContext.Provider value={{ activeIdx, setActiveIdx }}>
      <div
        className={cn('w-full max-w-screen-lg', className)}
        {...props}
      >
        <FollowPointer.Area id={followPointerId}>
          <CursorArea>
            <ul className='w-full'>{children}</ul>
          </CursorArea>
        </FollowPointer.Area>

        <FollowPointer
          className='z-40 aspect-square w-full max-w-xs overflow-hidden'
          id={followPointerId}
          smoothConfig={{ stiffness: 75 }}
        >
          <div>
            <ul
              className='flex h-full w-full transform flex-col gap-[--gap] bg-main transition-all delay-75 duration-500 [--gap:theme(spacing.1)]'
              style={{
                '--tw-translate-y': `calc(${
                  -100 * activeIdx
                }% - var(--gap) * ${activeIdx})`,
              }}
            >
              {images.map((img, i) => (
                <li
                  className={cn(
                    'relative flex h-full w-full shrink-0 items-center justify-center bg-main',
                    i % 2 === 0 ? 'light' : 'dark',
                  )}
                  key={img.src}
                >
                  <Image {...img} />
                </li>
              ))}
            </ul>
          </div>
        </FollowPointer>
      </div>
    </ListProjectsContext.Provider>
  );
};

export default ListProjects;
