'use client';

import { useContext } from 'react';

import { getProjects } from '@/api';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui/text';
import { ProjectsShowContext } from '@/contexts';
import { useLoadMore } from '@/hooks';
import { cn, isFunctionThanCall } from '@/utils';

const ProjectsShowLoadMore = ({ variants, children, ...props }) => {
  const { setProjects } = useContext(ProjectsShowContext);

  const { loadMore, isFetching, isLastPage } = useLoadMore(
    setProjects,
    getProjects,
  );

  return !isLastPage.current ? (
    <MagneticButton
      disabled={isFetching}
      variants={{ color: 'main', ...variants }}
      {...props}
      onClick={async (ev) => {
        await loadMore();

        isFunctionThanCall(props.onClick, ev);
      }}
    >
      {!isFetching ? (
        children
      ) : (
        <div className='flex gap-1'>
          <ProjectsShowLoadMoreDot />
          <ProjectsShowLoadMoreDot className='delay-200' />
          <ProjectsShowLoadMoreDot className='[animation-delay:400ms]' />
        </div>
      )}
    </MagneticButton>
  ) : (
    <Text className='text-muted-content'>
      Congrats! You really saw them all.
    </Text>
  );
};

const ProjectsShowLoadMoreDot = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'animate-loader aspect-square w-[.25em] rounded-full bg-current',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsShowLoadMore;
