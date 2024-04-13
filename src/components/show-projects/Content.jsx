'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useContext, useRef } from 'react';

import { ProjectsShowContext } from '@/contexts';
import { capitalize } from '@/utils';

import List from './list'
import { projectsApi } from '@/api';
import { useUpdateEffect } from '@/hooks';

const ProjectsViewShowContent = ({ className, ...props }) => {
  const { type = '', projects = [], setProjects } = useContext(ProjectsShowContext),
  searchParams = useSearchParams();

    const page = searchParams.get('page') || '1',  
    role = searchParams.get('role') || 'all'

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
      handleSetProjects(`?page${page}&role=${role.toLowerCase()}`);
    }, [page, role]); 

  return !!projects.length && (
    <List images={images} {...props}>
      {ListType && <ListType data={items} />}
    </List>
  );
};

export default ProjectsViewShowContent;
