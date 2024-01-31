import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsListNumber = ({ className, index, ...props }) => {
  return (
    <Text
      className={cn(
        'translate-y-0.5 text-sm font-medium text-muted-content',
        className,
      )}
      {...props}
    >
      {`${index + 1}`.padStart(2, '0')}/
    </Text>
  );
};

export default ProjectsListNumber;
