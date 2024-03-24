'use client';

import { useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';

import { projectsApi } from '@/api';
import { Projects } from '@/components';
import { ProjectsShowContext } from '@/contexts';
import { cn } from '@/utils';

const ProjectsViewShowContent = ({ className, ...props }) => {
  const {
      type = '',
      role = '',
      projects = [],
      setProjects,
    } = useContext(ProjectsShowContext),
    page = useSearchParams().get('page') || 1;

  const projectsObj = projects.reduce(
    (obj, project) => getByRole(role, obj, project),
    { data: [], images: [] },
  );

  useEffect(() => {
    const handleSetProjects = async () => {
      const { data = [] } = await projectsApi.get(`?page=${page}`);

      setProjects(data);
    };

    if (page > 1) handleSetProjects();
  }, [page, setProjects]);

  const types = {
    list: (
      <Projects.List>
        {projectsObj.data.map((data, i) => (
          <Projects.List.Item
            href={`/projects/${data.slug}`}
            index={i}
            key={'projects-list-' + data.slug}
          >
            <Projects.List.Number index={i} />

            <Projects.List.Content className='grid-cols-4 sm:grid-cols-4'>
              <Projects.List.Title text={data.title} />

              <Projects.List.Roles
                className='max-sm:col-span-3 sm:justify-center'
                data={data.roles}
              />

              <Projects.List.Year>{data.year}</Projects.List.Year>
            </Projects.List.Content>
          </Projects.List.Item>
        ))}

        <Projects.List.Images />
      </Projects.List>
    ),
    grid: (
      <Projects.Grid>
        {projectsObj.data.map((data, i) => (
          <Projects.Grid.Item
            href={`/projects/${data.slug}`}
            index={i}
            key={'projects-grid-' + data.slug}
          >
            <Projects.Grid.Number index={i} />

            <Projects.Grid.Image index={i} />

            <Projects.Grid.Title text={data.title} />

            <Projects.Grid.Roles data={data.roles} />

            <Projects.Grid.Year>{data.year}</Projects.Grid.Year>
          </Projects.Grid.Item>
        ))}
      </Projects.Grid>
    ),
  };

  return (
    <Projects
      className={cn('w-full', className)}
      images={projectsObj.images}
      {...props}
    >
      {types[type.toLowerCase()]}
    </Projects>
  );
};

const getByRole = (role, obj1, { thumbnail, ...data }) => {
  const isValid =
    role === 'all' || role === undefined
      ? true
      : !!data.roles.find((data) => data.toLowerCase() === role.toLowerCase());

  return {
    data: isValid ? [...obj1.data, data] : obj1.data,
    images: isValid ? [...obj1.images, thumbnail] : obj1.images,
  };
};

export default ProjectsViewShowContent;
