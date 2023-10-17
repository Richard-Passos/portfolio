import { Text } from '@/components/ui';
import { cn } from '@/utils';

const FooterContentSubtitle = ({ asChild, className, children, ...props }) => {
  return (
    <Text.Subtitle
      asChild
      className={cn('text-xs uppercase opacity-50', className)}
    >
      {asChild ? children : <h4>Local time</h4>}
    </Text.Subtitle>
  );
};

export default FooterContentSubtitle;
