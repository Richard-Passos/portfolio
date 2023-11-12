import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const FormSubmit = ({ asChild, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      type='submit'
      {...props}
    />
  );
};

export default forwardRef(FormSubmit);
