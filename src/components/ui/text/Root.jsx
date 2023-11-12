import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const Text = ({ asChild, ...props }, ref) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Text);
