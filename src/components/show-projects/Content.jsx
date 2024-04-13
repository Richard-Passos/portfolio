'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useContext } from 'react';

import { ShowProjectsContext } from '@/contexts';
import { capitalize } from '@/utils';

import List from './list'
import { projectsApi } from '@/api';
import { useUpdateEffect } from '@/hooks';

const ShowProjectsContent = ({ className, ...props }) => {
  const { projects = [], setProjects, type = '' } = useContext(ShowProjectsContext),
  searchParams = useSearchParams();

    const page = +searchParams.get('page') || 1,  
    role = searchParams.get('role').toLowerCase() || 'all'

  const { items, images } = projects.reduce(
    (obj, { thumbnail, ...data }) => ({
      items: [...obj.items, data],
      images: [...obj.images, thumbnail],
    }),
    { items: [], images: [] },
  );

  const ListType = List[type.split(' ')?.map(capitalize).join('')]

  const handleSetProjects = useCallback(async (pathname = '') => {
      const { data = [] } = await projectsApi.get(pathname);

    setProjects(data);
  }, [setProjects])
 
  useUpdateEffect(() => {
      handleSetProjects(`?page${page}&role=${role}`);
    }, [page, role]); 

  return !!projects.length && (
    <List images={images} {...props}>
      {ListType && <ListType data={items} />}
    </List>
  );
};

export default ShowProjectsContent;
