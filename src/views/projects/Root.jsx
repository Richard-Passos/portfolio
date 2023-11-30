import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectsView = ({ className, ...props }) => {
  return (
    <main
      className={cn('flex min-h-screen items-center justify-center', className)}
      {...props}
    >
      <Text.Title>Projects page</Text.Title>
    </main>
  );
};

export default ProjectsView;
