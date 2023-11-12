import { Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkView = ({ className, ...props }) => {
  return (
    <main
      className={cn('flex min-h-screen items-center justify-center', className)}
      {...props}
    >
      <Text.Title>Work page</Text.Title>
    </main>
  );
};

export default WorkView;
