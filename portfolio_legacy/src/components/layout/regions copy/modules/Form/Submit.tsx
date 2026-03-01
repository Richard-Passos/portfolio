import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';

type FormSubmitProps = SlotAsChildProps<ComponentProps<'button'>>;

const FormSubmit = ({ asChild, ...props }: FormSubmitProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      type='submit'
      {...props}
    />
  );
};

export { FormSubmit };
export type { FormSubmitProps };
