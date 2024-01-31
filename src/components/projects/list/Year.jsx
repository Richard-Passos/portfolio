import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsListYear = ({ className, ...props }) => {
  return (
    <Text
      className={cn(
        'text-sm font-medium max-sm:self-center max-sm:justify-self-end',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsListYear;
