'use client';

import { useContext, useState } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { FollowPointer } from '../../ui';
import Images from './Images';

const FOLLOW_POINTER_ID = 'fp-projects-img';

const ProjectsList = ({ className, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(undefined),
    { images } = useContext(ProjectsContext);

  return (
    <ProjectsContext.Provider value={{ activeIdx, setActiveIdx, images }}>
      <FollowPointer.Area id={FOLLOW_POINTER_ID}>
        <nav
          className={cn('w-full', className)}
          {...props}
        />
      </FollowPointer.Area>

      <Images id={FOLLOW_POINTER_ID} />
    </ProjectsContext.Provider>
  );
};

export default ProjectsList;
