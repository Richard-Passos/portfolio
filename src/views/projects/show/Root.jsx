'use client';

import { useState } from 'react';

import { ProjectsShowContext } from '@/contexts';
import { cn } from '@/utils';

const ProjectsShow = ({ className, ...props }) => {
  const [data, setData] = useState({ role: undefined, type: 'list' });

  const handleSetData = (id, content) =>
    setData((data) => ({ ...data, [id]: content }));

  const setRole = (role) => handleSetData('role', role),
    setType = (type) => handleSetData('type', type);

  return (
    <ProjectsShowContext.Provider value={{ ...data, setRole, setType }}>
      <div
        className={cn(
          'flex w-[90%] max-w-screen-lg flex-col gap-10 sm:gap-14',
          className,
        )}
        {...props}
      />
    </ProjectsShowContext.Provider>
  );
};

export default ProjectsShow;
