'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { CursorLink } from '../../link';
import ScrollAnimation from '../../scroll-animation';
import { Badge } from '../../ui';

const ANIMATION_OFFSET = ['0 1', '1 1'];

const ProjectsListItem = ({ className, data, index, img, ...props }) => {
  const { setActiveIdx } = useContext(ProjectsContext);

  const animationConfig = {
    rotateY: {
      useScrollConfig: { offset: ANIMATION_OFFSET },
      prop: 'rotateX',
      propPoints: ['-80deg', '0deg'],
    },
    scaleX: {
      useScrollConfig: { offset: ANIMATION_OFFSET },
      prop: '--tw-scale-x',
      propPoints: [1.1, 1],
    },
  };

  return (
    <ScrollAnimation.Transform config={animationConfig.rotateY}>
      <ScrollAnimation.Transform config={animationConfig.scaleX}>
        <li
          className={cn(
            'relative border-t [transform-style:preserve-3d] last:border-b focus-within:outline',
            className,
          )}
          {...props}
        >
          <CursorLink
            className={cn(
              'group flex h-full w-full justify-around gap-x-6 py-12 no-underline',
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
            variant={{ scaleX: 0.75, scaleY: 0.75 }}
            {...props}
          >
            <span className='overflow-hidden overflow-ellipsis whitespace-nowrap text-[clamp(1.5rem,3.3vw,3rem)] uppercase leading-none transition-transform duration-300 group-hover:scale-y-125'>
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
    </ScrollAnimation.Transform>
  );
};

export default ProjectsListItem;
