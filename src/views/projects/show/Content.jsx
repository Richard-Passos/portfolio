'use client';

import { useContext } from 'react';

import { Projects } from '@/components';
import { ProjectsShowContext } from '@/contexts';
import { cn } from '@/utils';

const ProjectsShowContent = ({ initialData = [], className, ...props }) => {
  const { type, role, projects } = useContext(ProjectsShowContext);

  const projectsObj = [...initialData, ...projects].reduce(
    (obj, project) => getByRole(role, obj, project),
    { data: [], images: [] },
  );

  const types = {
    list: (
      <Projects.List>
        {projectsObj.data.map((project, i) => (
          <Projects.List.Item
            href={project.href}
            index={i}
            key={'projects-list-' + project.href}
          >
            <Projects.List.Number index={i} />

            <Projects.List.Content className='grid-cols-4 sm:grid-cols-4'>
              <Projects.List.Title text={project.title} />

              <Projects.List.Roles
                className='max-sm:col-span-3 sm:justify-center'
                data={project.roles}
              />

              <Projects.List.Year>{project.year}</Projects.List.Year>
            </Projects.List.Content>
          </Projects.List.Item>
        ))}
      </Projects.List>
    ),
    grid: (
      <Projects.Grid>
        {projectsObj.data.map((project, i) => (
          <Projects.Grid.Item key={'projects-grid-' + project.href}>
            <Projects.Grid.Link href={project.href}>
              <Projects.Grid.Number index={i} />

              <Projects.Grid.Image index={i} />

              <Projects.Grid.Title text={project.title} />
            </Projects.Grid.Link>

            <Projects.Grid.Roles data={project.roles} />

            <Projects.Grid.Year>{project.year}</Projects.Grid.Year>
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

const getByRole = (role, obj1, { img, ...data }) => {
  const isValid =
    role === 'all' || role === undefined
      ? true
      : !!data.roles.find((data) => data.toLowerCase() === role.toLowerCase());

  return {
    data: isValid ? [...obj1.data, data] : obj1.data,
    images: isValid ? [...obj1.images, img] : obj1.images,
  };
};

export default ProjectsShowContent;
