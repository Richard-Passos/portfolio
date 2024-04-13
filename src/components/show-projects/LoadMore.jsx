'use client';

import { useContext, useEffect } from 'react';

import { ProjectsShowContext } from '@/contexts';
import { useLoadMore } from '@/hooks';
import { isFunctionThanCall } from '@/utils';
import { Slot } from '@radix-ui/react-slot';
import { projectsApiGet } from '@/api/projects';
import { useSearchParams } from 'next/navigation';

const ProjectsViewShowLoadMore = ({ asChild, ...props }) => {
  const { setProjects, isLastPage: isProjectsLastPage, setIsLastPage } = useContext(ProjectsShowContext),
  searchParams = useSearchParams();

  const role = searchParams.get('role')
 
  const { loadMore, isLoading, isLastPage } = useLoadMore(
    projectsApiGet,
    setProjects,
    `&role${role}`,
  );
  
  const Tag = asChild ? Slot : 'button'
  
  useEffect(() => {
    setIsLastPage(isLastPage)
  }, [isLastPage])

  return !isProjectsLastPage && <Tag
      disabled={isLoading}
      data-state={isLoading ? 'loading' : 'loaded'}
      {...props}
      onClick={(ev) => {
        loadMore();

        isFunctionThanCall(props.onClick, ev);
      }}
    />
};

export default ProjectsViewShowLoadMore;
