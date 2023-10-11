import { Text } from '@/components/ui';
import { cn } from '@/utils';

const Work = ({ className, ...props }) => {
  return (
    <main
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <Text.Title>Work page</Text.Title>
    </main>
  );
};

export default Work;
