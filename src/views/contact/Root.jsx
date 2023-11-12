import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ContactView = ({ className, ...props }) => {
  return (
    <main
      className={cn('flex min-h-screen items-center justify-center', className)}
      {...props}
    >
      <Text.Title>Contact page</Text.Title>
    </main>
  );
};

export default ContactView;
