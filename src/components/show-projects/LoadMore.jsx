'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';

import { projectsApiGet } from '@/api/projects';
import { ShowProjectsContext } from '@/contexts';
import { useLoadMore } from '@/hooks';
import { isFunctionThanCall } from '@/utils';

const ShowProjectsLoadMore = ({ asChild, ...props }) => {
  const {
      setProjects,
      isLastPage: isProjectsLastPage,
      setIsLastPage,
    } = useContext(ShowProjectsContext),
    searchParams = useSearchParams();

  const role = searchParams.get('role')?.toLowerCase();

  const { loadMore, isLoading, isLastPage } = useLoadMore(
    projectsApiGet,
    setProjects,
    `&role=${role}`,
  );

  const Tag = asChild ? Slot : 'button';

  useEffect(() => {
    setIsLastPage(isLastPage);
  }, [setIsLastPage, isLastPage]);

  return (
    !isProjectsLastPage && (
      <Tag
        disabled={isLoading}
        data-state={isLoading ? 'loading' : 'loaded'}
        {...props}
        onClick={async (ev) => {
          await loadMore();

          isFunctionThanCall(props.onClick, ev);
        }}
      />
    )
  );
};

export default ShowProjectsLoadMore;
