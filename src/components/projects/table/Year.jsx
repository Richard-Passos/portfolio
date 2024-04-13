import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsTableYear = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'grow basis-0 text-end text-sm font-medium sm:text-center',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsTableYear;
