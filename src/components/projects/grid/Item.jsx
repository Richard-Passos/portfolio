'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { CursorLink } from '../../link';
import { ScrollAnimationTransform } from '../../scroll-animation';
import { Badge, Image, Text } from '../../ui';
import Title from '../title';

const ProjectsGridItem = ({ index, className, data, ...props }) => {
  const { images } = useContext(ProjectsContext);

  const img = images[index];

  const animationConfig = {
    useScrollConfig: { offset: ['0 1', '.25 1'] },
    prop: '--y',
    propPoints: [0.25, 0],
  };

  return (
    <li
      className={cn(
        'w-full sm:w-[calc(50%_-_var(--gap)/2)] sm:even:ml-auto sm:[&:not(:first-child)>div]:-mt-[45%]',
        className,
      )}
      {...props}
    >
      <ScrollAnimationTransform
        config={animationConfig}
        smoothConfig={{ stiffness: 75 }}
      >
        <div className='space-y-6 sm:translate-y-[calc(var(--y)*100%)]'>
          <CursorLink
            className='group relative aspect-square w-full rounded-lg'
            content={{
              name: 'Eye',
              className: 'w-[45%] h-[45%]',
            }}
            href={data.href}
          >
            <Text className='outline-text pointer-events-none absolute bottom-0 right-0 translate-y-1/2 text-[14vw] text-muted-content opacity-50 dark:opacity-20 sm:text-[min(10vw,8rem)]/[1]'>
              {`${index + 1}`.padStart(2, '0')}/
            </Text>

            <div className='relative h-full w-full overflow-hidden rounded-inherit border border-transparent transition-transform duration-300 group-hover:scale-[.98]'>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                className='h-full w-full object-cover'
                {...img}
              />

              <span className='absolute inset-0 -z-10 rounded-inherit bg-muted transition-bg' />
            </div>

            <span className='absolute inset-0 bg-main/75 opacity-0 backdrop-blur-sm transition-[background-color,opacity] group-hover:opacity-100' />

            <Title
              animationType='onGroupHover'
              className='absolute max-w-[90%] text-center text-[9vw] sm:text-[min(4vw,2.25rem)]'
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
