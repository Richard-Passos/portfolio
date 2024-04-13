import { cn } from '@/utils';
import { Text } from '@/components/ui/text';

const ProjectsTableRoles = ({ className, data = [], ...props }) => {
  return (
    <Text
      className={cn(
        'text-sm font-medium grow basis-2/3 sm:basis-0 lowercase sm:text-end text-ellipsis overflow-hidden',
        className,
      )}
      {...props}
    >
      {data
        .sort((a, b) => a.localeCompare(b)).join(' & ')
        }
    </Text>
  );
};

export default ProjectsTableRoles;
