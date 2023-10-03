import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Title = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag
      className={cn('text-gray text-lg font-bold', className)}
      {...props}
    />
  );
};

export default Title;
