'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { CursorLink } from '../../link';
import { ScrollAnimationTransform } from '../../scroll-animation';

const ProjectsListItem = ({ className, index, children, ...props }) => {
  const { setActiveIdx } = useContext(ProjectsContext);

  const animationConfig = {
    useScrollConfig: { offset: ['0 1', '0 .55'] },
    prop: 'scaleX',
    scrollPoints: [0, 0.5, 1],
    propPoints: [1, 1.05, 1],
  };

  return (
    <ScrollAnimationTransform config={animationConfig}>
      <CursorLink
        className={cn(
          'group relative flex w-full items-start gap-4 overflow-hidden border-t px-[7.5%] py-12 no-underline last:border-b',
          className,
        )}
        content={{
          name: 'Eye',
          className: 'w-[45%] h-[45%]',
        }}
        onMouseEnter={(ev) => {
          setActiveIdx(index);

          isFunctionThanCall(props.onMouseEnter, ev);
        }}
        {...props}
      >
        {children}

        <div className='absolute inset-0 -z-10 translate-y-full overflow-hidden transition-transform group-hover:translate-y-0 group-hover:duration-0'>
          <div className='h-full -translate-y-full transition-transform delay-150 group-hover:translate-y-0 group-hover:delay-0'>
            <span className='h-full w-full bg-muted transition-bg' />
          </div>
        </div>
      </CursorLink>
    </ScrollAnimationTransform>
  );
};

export default ProjectsListItem;
