'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { CursorLink } from '../../link';
import ScrollAnimation from '../../scroll-animation';
import { Badge } from '../../ui';
import Title from '../Title';

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
            'group relative flex h-full w-full justify-around gap-x-6 overflow-hidden py-12 no-underline',
            className,
          )}
          content={{
            name: 'EyeOpen',
          }}
          href={data.href}
          onMouseEnter={(ev) => {
            setActiveIdx(index);

            isFunctionThanCall(props.onMouseEnter, ev);
          }}
          {...props}
        >
          <Title
            className='overflow-hidden overflow-ellipsis whitespace-nowrap text-[clamp(1.5rem,3.3vw,3rem)] leading-none'
            text={data.title}
          />

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

          <div className='absolute inset-0 -z-10 translate-y-full overflow-hidden transition-transform group-hover:translate-y-0 group-hover:duration-0'>
            <div className='h-full -translate-y-full transition-transform delay-150 group-hover:translate-y-0 group-hover:delay-0'>
              <span className='h-full w-full bg-muted transition-bg' />
            </div>
          </div>
        </CursorLink>
      </li>
    </ScrollAnimation.Transform>
  );
};

export default ProjectsListItem;
