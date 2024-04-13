'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { FollowPointer, Image } from '../../ui';
import { PROJECTS_TABLE_FOLLOW_POINTER_ID } from './Root';

const ProjectsTableImages = ({ className, ...props }) => {
  const { activeIdx, images } = useContext(ProjectsContext);

  return (
    <FollowPointer
      className={cn(
        'aspect-square w-[50vmin] max-w-sm [clip-path:inset(0_round_theme(borderRadius.3xl))]',
        className,
      )}
      id={PROJECTS_TABLE_FOLLOW_POINTER_ID}
      smoothConfig={{ stiffness: 100 }}
      {...props}
    >
      <ul>
        {images.map((img, i) => (
          <li
            className='absolute inset-0 transition-[clip-path] duration-500'
            key={img.src}
            style={{
              clipPath:
                i > activeIdx
                  ? 'inset(100% 0 0 0 round 50% 50% 0 0)'
                  : 'inset(0 round 0)',
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              className='size-full scale-[--scale] object-cover object-center transition-transform duration-500'
              style={{
                '--scale': i > activeIdx ? 1.1 : 1,
              }}
              {...img}
            />
          </li>
        ))}
      </ul>
    </FollowPointer>
  );
};

export default ProjectsTableImages;
