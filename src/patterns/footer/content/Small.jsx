import { Text } from '@/components/ui';
import { cn } from '@/utils';

const FooterContentSubtitle = ({ className, ...props }) => {
  return (
    <Text.Small
      className={cn('font-semibold', className)}
      {...props}
    />
  );
};

export default FooterContentSubtitle;
