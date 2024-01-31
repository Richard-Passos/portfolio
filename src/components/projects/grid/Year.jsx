import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsGridYear = ({ className, ...props }) => {
  return (
    <Text
      className={cn('mr-3.5 justify-self-end text-sm font-medium', className)}
      {...props}
    />
  );
};

export default ProjectsGridYear;
