import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Bg = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'span';

  return (
    <Tag
      className={cn(
        'absolute inset-y-0 -z-50 w-screen bg-main transition-bg',
        className,
      )}
      {...props}
    />
  );
};

export default Bg;
