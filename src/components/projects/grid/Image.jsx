'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import ScrollAnimation from '../../scroll-animation';
import { Image } from '../../ui';

const ProjectsGridImage = ({ index, className, ...props }) => {
  const { images } = useContext(ProjectsContext);

  const img = images[index];

  const animationConfig = {
    clipPath: {
      useScrollConfig: {
        offset: ['0 1', '0 .35'],
      },
      useScrollRes: 'scrollYProgress',
      prop: 'clipPath',
      scrollPoints: [0, 1],
      propPoints: [
        'inset(50% 0 0 0 round 50% 50% 0 0)',
        'inset(0% 0 0 0 round 0% 0% 0 0)',
      ],
    },
    scale: {
      useScrollConfig: {
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
      <ScrollAnimation config={animationConfig.clipPath}>
        <ScrollAnimation.Transform config={animationConfig.scale}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            className='size-full object-cover'
            {...img}
          />
        </ScrollAnimation.Transform>
      </ScrollAnimation>
    </div>
  );
};

export default ProjectsGridImage;
