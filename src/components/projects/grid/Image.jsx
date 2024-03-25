'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import ScrollAnimate from '../../scroll-animate';
import { Image } from '../../ui';

const ProjectsGridImage = ({ index, className, ...props }) => {
  const { images } = useContext(ProjectsContext);

  const img = images[index];

  const animationConfig = {
    clipPath: {
      scrollConfig: {
        offset: ['0 1', '0 .35'],
      },
      prop: 'clipPath',
      propPoints: [
        'inset(50% 0 0 0 round 50% 50% 0 0)',
        'inset(0% 0 0 0 round 0% 0% 0 0)',
      ],
    },
    scale: {
      scrollConfig: {
        offset: ['0 1', '0 .35'],
      },
      prop: 'scale',
      propPoints: [1.1, 1],
    },
  };

  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden rounded-inherit border border-transparent bg-muted',
        className,
      )}
      {...props}
    >
      <ScrollAnimate config={animationConfig.clipPath}>
        <ScrollAnimate.Transform config={animationConfig.scale}>
          <div className='size-full'>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              className='size-full object-cover transition-transform duration-300 group-hover:scale-110'
              {...img}
            />
          </div>
        </ScrollAnimate.Transform>
      </ScrollAnimate>
    </div>
  );
};

export default ProjectsGridImage;
