import { cn } from '@/utils';

import { FollowPointer } from '../../ui';

const PROJECTS_TABLE_FOLLOW_POINTER_ID = 'fp-projects-img';

const ProjectsTable = ({ className, ...props }) => {
  return (
    <FollowPointer.Area id={PROJECTS_TABLE_FOLLOW_POINTER_ID}>
      <nav
        className={cn('group w-full', className)}
        {...props}
      />
    </FollowPointer.Area>
  );
};

export default ProjectsTable;
export { PROJECTS_TABLE_FOLLOW_POINTER_ID };
