import { cn } from '@/utils';

import { TextSubtitle } from '../ui/text';

const ValuesTitle = ({ className, ...props }) => {
  return (
    <TextSubtitle
      className={cn('mt-6 text-2xl', className)}
      {...props}
    />
  );
};

export default ValuesTitle;
