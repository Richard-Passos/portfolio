'use client';

import { useContext } from 'react';

import { projectsApi } from '@/api';
import { DotsLoader } from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui/text';
import { ProjectsShowContext } from '@/contexts';
import { useLoadMore } from '@/hooks';
import { isFunctionThanCall } from '@/utils';

const ProjectsViewShowLoadMore = ({ variants, children, ...props }) => {
  const { setProjects } = useContext(ProjectsShowContext);

  const { loadMore, isFetching, isLastPage } = useLoadMore(
    setProjects,
    projectsApi.get,
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
      {!isFetching ? children : <DotsLoader />}
    </MagneticButton>
  ) : (
    <Text className='text-muted-content'>
      Congrats! You really saw them all.
    </Text>
  );
};

export default ProjectsViewShowLoadMore;
