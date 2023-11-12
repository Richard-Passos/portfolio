import { cn } from '@/utils';

import { TextSmall } from '../../ui/text';

const FooterContentSubtitle = ({ className, ...props }) => {
  return (
    <TextSmall
      className={cn('font-semibold', className)}
      {...props}
    />
  );
};

export default FooterContentSubtitle;
