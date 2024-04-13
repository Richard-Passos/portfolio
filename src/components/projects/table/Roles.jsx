import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const ProjectsTableRoles = ({ className, data = [], ...props }) => {
  return (
    <Text
      className={cn(
        'grow basis-2/3 overflow-hidden text-ellipsis text-sm font-medium lowercase sm:basis-0 sm:text-end',
        className,
      )}
      {...props}
    >
      {data.sort((a, b) => a.localeCompare(b)).join(' & ')}
    </Text>
  );
};

export default ProjectsTableRoles;
