'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { CursorLink } from '../../link';
import ScrollAnimation from '../../scroll-animation';
import { Badge, Image } from '../../ui';
import Title from './Title';

const ANIMATION_OFFSET = ['-.25 1', '0 1'];

const ProjectsGridItem = ({ index, className, style, data, ...props }) => {
  const { images } = useContext(ProjectsContext);

  const img = images[index];

  const animationConfig = {
    scale: {
      useScrollConfig: { offset: ANIMATION_OFFSET },
      prop: 'scale',
      scrollPoints: [0, 0.999, 1],
      propPoints: [0.95, 0.95, 1],
    },
    clipPath: {
      useScrollConfig: { offset: ANIMATION_OFFSET },
      useScrollRes: 'scrollYProgress',
      prop: '--clip-path',
      scrollPoints: [0, 0.999, 1],
      propPoints: [1, 1, 0],
    },
  };

  return (
    <li
      className={cn(
        'w-full space-y-6 sm:w-[calc(50%_-_var(--gap)/2)] sm:even:ml-auto sm:first:[&:not(:first-child)>*]:-mt-[45%]',
        className,
      )}
      style={{
        '--idx': index,
        ...style,
      }}
      {...props}
    >
      <ScrollAnimation.Transform
        config={animationConfig.scale}
        smoothConfig={{ stiffness: 50 }}
      >
        <CursorLink
          className='group relative aspect-square w-full overflow-hidden rounded-lg bg-muted'
          href={data.href}
        >
          <ScrollAnimation
            config={animationConfig.clipPath}
            smoothConfig={{ stiffness: 50 }}
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              className='h-full w-full object-cover transition-transform duration-300 [clip-path:inset(0_0_calc(var(--clip-path)*100%)_0)] group-hover:scale-105'
              {...img}
            />
          </ScrollAnimation>

          <span className='pointer-events-none absolute inset-0 bg-main/75 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100' />

          <Title text={data.title} />
        </CursorLink>
      </ScrollAnimation.Transform>

      <div className='flex flex-wrap gap-1.5'>
        {data.roles
          .sort((a, b) => a.localeCompare(b))
          .map((role) => (
            <Badge
              className='lowercase [--variant:--muted-c]'
              key={role}
              variants={{ style: 'outline' }}
            >
              {role}
            </Badge>
          ))}
      </div>
    </li>
  );
};

export default ProjectsGridItem;
