import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const ValuesTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('mb-2 text-2xl', className)}
      {...props}
    />
  );
};

export default ValuesTitle;
