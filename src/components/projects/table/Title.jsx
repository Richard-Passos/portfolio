import { cn } from '@/utils';

import Title from '../title';

const ProjectsTableTitle = ({ className, ...props }) => {
  return (
    <Title
      className={cn('basis-full text-4xl sm:basis-1/2 sm:text-5xl', className)}
      {...props}
    />
  );
};

export default ProjectsTableTitle;
