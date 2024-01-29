import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Bg = ({ asChild, className, ...props }) => {
  const Tag = asChild ? Slot : 'span';

  return (
    <Tag
      className={cn(
        'absolute inset-y-0 left-1/2 -z-50 w-screen -translate-x-1/2 bg-main transition-bg',
        className,
      )}
      {...props}
    />
  );
};

export default Bg;
