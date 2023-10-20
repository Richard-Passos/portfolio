import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Bg = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'span';

  return (
    <Tag
      aria-label='Background'
      className={cn(
        'transition-bg absolute inset-0 -z-20 w-auto bg-main',
        className,
      )}
      {...props}
    />
  );
};

export default Bg;
