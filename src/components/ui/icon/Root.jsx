import * as Icons from '@radix-ui/react-icons';

import { cn } from '@/utils';

const Icon = ({ name, className, ...props }) => {
  const Tag = Icons[name + 'Icon'] || Icons.QuestionMarkIcon;

  return (
    <Tag
      className={cn('h-5 w-5', className)}
      {...props}
    />
  );
};

export default Icon;
