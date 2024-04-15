'use client';

import { useContext } from 'react';

import { ShowProjectsContext } from '@/contexts';
import { useSetProjects } from '@/hooks';
import { normCompName, normProjects } from '@/utils';

import List from './list';

const ShowProjectsContent = ({ className, ...props }) => {
  const [state, setState] = useContext(ShowProjectsContext);

  const { data, images } = normProjects(state.items);

  const ListType = List[normCompName(state.type)];

  useSetProjects(setState);

  return (
    !!state.items?.length && (
      <List
        images={images}
        {...props}
      >
        {ListType && <ListType data={data} />}
      </List>
    )
  );
};

export default ShowProjectsContent;
