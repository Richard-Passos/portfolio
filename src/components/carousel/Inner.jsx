import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Inner = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'ul';

  return (
    <Tag
      className={cn(
        'flex w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        className,
      )}
      {...props}
    />
  );
};

export default Inner;
