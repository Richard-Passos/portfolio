'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { CursorLink } from '../../link';
import ScrollAnimation from '../../scroll-animation';
import { Badge } from '../../ui';

const ProjectsListItem = ({ className, data, index, img, ...props }) => {
  const { setActiveIdx } = useContext(ProjectsContext);

  const animationConfig = {
    useScrollConfig: { offset: ['0 1', '3 1'] },
    prop: 'scaleX',
    scrollPoints: [0, 0.5, 1],
    propPoints: [1, 1.05, 1],
  };

  return (
    <ScrollAnimation.Transform config={animationConfig}>
      <li
        className={cn('border-t last:border-b focus-within:outline', className)}
        {...props}
      >
        <CursorLink
          className={cn(
            'group flex h-full w-full justify-around gap-x-6 py-12 no-underline hover:bg-muted',
            className,
          )}
          content={{
            type: 'icon',
            name: 'EyeOpen',
          }}
          href={data.href}
          onMouseEnter={(ev) => {
            setActiveIdx(index);

            isFunctionThanCall(props.onMouseEnter, ev);
          }}
          {...props}
        >
          <span className='overflow-hidden overflow-ellipsis whitespace-nowrap text-[clamp(1.5rem,3.3vw,3rem)] uppercase leading-none'>
            {data.title}
          </span>

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
        </CursorLink>
      </li>
    </ScrollAnimation.Transform>
  );
};

export default ProjectsListItem;
