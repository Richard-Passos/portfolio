import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const ServicesTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('mt-4 text-2xl first-letter:uppercase', className)}
      {...props}
    />
  );
};

export default ServicesTitle;
