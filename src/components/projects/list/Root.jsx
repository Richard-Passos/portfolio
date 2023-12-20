'use client';

import { useContext, useState } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { FollowPointer, Image } from '../../ui';

const ProjectsList = ({ className, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(undefined),
    { images } = useContext(ProjectsContext);

  const followPointerId = 'fp-projects-img';

  return (
    <ProjectsContext.Provider value={{ activeIdx, setActiveIdx }}>
      <FollowPointer.Area id={followPointerId}>
        <ul
          className={cn('w-full', className)}
          {...props}
        />
      </FollowPointer.Area>

      <FollowPointer
        className='aspect-square w-[50vmin] max-w-sm overflow-hidden'
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
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                  className='h-full w-full object-cover object-center'
                  {...img}
                />
              </li>
            ))}
          </ul>
        </div>
      </FollowPointer>
    </ProjectsContext.Provider>
  );
};

export default ProjectsList;
