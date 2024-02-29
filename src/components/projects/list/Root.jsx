import { cn } from '@/utils';

import { FollowPointer } from '../../ui';

const PROJECTS_LIST_FOLLOW_POINTER_ID = 'fp-projects-img';

const ProjectsList = ({ className, ...props }) => {
  return (
    <FollowPointer.Area id={PROJECTS_LIST_FOLLOW_POINTER_ID}>
      <nav
        className={cn('group w-full', className)}
        {...props}
      />
    </FollowPointer.Area>
  );
};

export default ProjectsList;
export { PROJECTS_LIST_FOLLOW_POINTER_ID };
