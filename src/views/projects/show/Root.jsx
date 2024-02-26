'use client';

import { useState } from 'react';

import { ProjectsShowContext } from '@/contexts';
import { cn } from '@/utils';

const ProjectsViewShow = ({ defaultState, className,  ...props }) => {
  const [data, setData] = useState(defaultState);

  const handleSetData = (id) => (content) =>
    setData((state) => {
      const isFn = typeof content === 'function';

      return { ...state, [id]: isFn ? content(state[id]) : content };
    });

  return (
    <ProjectsShowContext.Provider
      value={{
        ...data,
        setProjects: handleSetData('projects'),
        setRole: handleSetData('role'),
        setType: handleSetData('type'),
      }}
    >
      <div
        className={cn(
          'flex w-9/10 max-w-screen-lg flex-col items-center gap-md',
          className,
        )}
        {...props}
      />
    </ProjectsShowContext.Provider>
  );
};

export default ProjectsViewShow;
