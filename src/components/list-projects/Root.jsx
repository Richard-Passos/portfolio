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
        className={cn('w-full max-w-screen-lg md:w-[90%]', className)}
        {...props}
      >
        <FollowPointer.Area id={followPointerId}>
          <CursorArea>
            <ul className='w-full'>{children}</ul>
          </CursorArea>
        </FollowPointer.Area>

        <FollowPointer
          className='z-40 aspect-square w-[min(50vw,50vh)] max-w-sm overflow-hidden'
          id={followPointerId}
          smoothConfig={{ stiffness: 100 }}
        >
          <div>
            <ul
              className='h-full w-full transform transition-transform duration-500'
              style={{ '--tw-translate-y': -100 * activeIdx + '%' }}
            >
              {images.map((img) => (
                <li
                  className='relative h-full w-full'
                  key={img.src}
                >
                  <Image
                    className='h-full w-full object-cover object-center'
                    {...img}
                  />
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
