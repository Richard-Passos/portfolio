import { cn } from '@/utils';

import { TextSubtitle } from '../../ui/text';

const FooterContentSubtitle = ({ asChild, className, children, ...props }) => {
  return (
    <TextSubtitle
      asChild
      className={cn('text-xs uppercase opacity-50', className)}
      {...props}
    >
      {asChild ? children : <h4>{children}</h4>}
    </TextSubtitle>
  );
};

export default FooterContentSubtitle;
