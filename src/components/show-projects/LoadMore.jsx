'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';

import { projectsApiGet } from '@/api/projects';
import { ShowProjectsContext } from '@/contexts';
import { useLoadMore } from '@/hooks';
import { isFunctionThanCall } from '@/utils';

const ShowProjectsLoadMore = ({ asChild, ...props }) => {
  const [state, setState] = useContext(ShowProjectsContext),
    searchParams = useSearchParams();

  const role = searchParams.get('role')?.toLowerCase();

  const loadMore = useLoadMore(projectsApiGet, setState, `&role=${role}`);

  const Tag = asChild ? Slot : 'button';

  return (
    !state.isLastPage &&
    !!state.items?.length && (
      <Tag
        disabled={state.isLoading}
        data-state={state.isLoading ? 'loading' : 'loaded'}
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
