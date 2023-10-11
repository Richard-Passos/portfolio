import { Text } from '@/components/ui';
import { cn } from '@/utils';

const Contact = ({ className, ...props }) => {
  return (
    <main
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <Text.Title>Contact page</Text.Title>
    </main>
  );
};

export default Contact;
