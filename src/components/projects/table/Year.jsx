import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsTableYear = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'text-sm grow font-medium text-end basis-0 sm:text-center',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsTableYear;
