import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Root = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      className={cn('text-gray-tertiary', className)}
      {...props}
    />
  );
};

export default Root;
