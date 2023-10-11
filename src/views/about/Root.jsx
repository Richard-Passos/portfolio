import { Text } from '@/components/ui';
import { cn } from '@/utils';

const About = ({ className, ...props }) => {
  return (
    <main
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <Text.Title>About page</Text.Title>
    </main>
  );
};

export default About;
