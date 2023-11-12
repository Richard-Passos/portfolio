import { Text } from '@/components/ui';
import { cn } from '@/utils';

const AboutView = ({ className, ...props }) => {
  return (
    <main
      className={cn('flex min-h-screen items-center justify-center', className)}
      {...props}
    >
      <Text.Title>About page</Text.Title>
    </main>
  );
};

export default AboutView;
