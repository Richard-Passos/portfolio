'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { CursorLink } from '../../link';
import { ScrollAnimationTransform } from '../../scroll-animation';
import { Badge, Image } from '../../ui';
import Title from '../Title';

const ANIMATION_OFFSET = ['0 1', '.25 1'];

const ProjectsGridItem = ({ index, className, data, ...props }) => {
  const { images } = useContext(ProjectsContext);

  const img = images[index];

  const animationConfig = {
    useScrollConfig: { offset: ANIMATION_OFFSET },
    prop: '--y',
    propPoints: [0.25, 0],
  };

  return (
    <li
      className={cn(
        'w-full sm:w-[calc(50%_-_var(--gap)/2)] sm:even:ml-auto sm:[&:not(:first-child)>div]:-mt-[60%]',
        className,
      )}
      {...props}
    >
      <ScrollAnimationTransform
        config={animationConfig}
        smoothConfig={{ stiffness: 75 }}
      >
        <div className='translate-y-[calc(var(--y)*100%)] space-y-6'>
          <CursorLink
            className='group relative aspect-[1/1.25] w-full overflow-hidden rounded-lg'
            content={{
              name: 'EyeOpen',
            }}
            href={data.href}
          >
            <div className='relative h-full w-full overflow-hidden rounded-inherit border border-transparent transition-transform duration-300 group-hover:scale-[.98]'>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                className='h-full w-full object-cover'
                {...img}
              />

              <span className='absolute inset-0 -z-10 bg-muted transition-bg' />
            </div>

            <span className='absolute inset-0 bg-main/75 opacity-0 backdrop-blur-sm transition-[background-color,opacity] group-hover:opacity-100' />

            <Title
              animationType='onGroupHover'
              className='absolute text-[9vw] sm:text-[min(4vw,2.25rem)]'
              text={data.title}
            />
          </CursorLink>

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
        </div>
      </ScrollAnimationTransform>
    </li>
  );
};

export default ProjectsGridItem;
