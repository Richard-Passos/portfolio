'use client';

import { useContext } from 'react';

import { Projects } from '@/components';
import { ProjectsShowContext } from '@/contexts';
import { cn } from '@/utils';

const ProjectsShowContent = ({ initialData = [], className, ...props }) => {
  console.log('-  initialData   -', initialData);
  const { type, role, projects } = useContext(ProjectsShowContext);

  const projectsObj = [...(initialData.results || []), ...projects].reduce(
    (obj, project) => getByRole(role, obj, project),
    { data: [], images: [] },
  );

  const types = {
    list: (
      <Projects.List>
        {projectsObj.data.map((project, i) => (
          <Projects.List.Item
            data={project}
            index={i}
            key={'projects-list-' + project.href}
          />
        ))}
      </Projects.List>
    ),
    grid: (
      <Projects.Grid>
        {projectsObj.data.map((project, i) => (
          <Projects.Grid.Item
            data={project}
            index={i}
            key={'projects-grid-' + project.href}
          />
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
