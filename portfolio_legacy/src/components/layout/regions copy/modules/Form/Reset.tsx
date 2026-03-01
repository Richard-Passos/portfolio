'use client';

import { ComponentProps, MouseEvent, useCallback } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useFormContext } from '@/hooks/contexts';

type FormResetProps = SlotAsChildProps<ComponentProps<'button'>>;

const FormReset = ({ asChild, onClick, ...props }: FormResetProps) => {
  const { reset } = useFormContext();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      reset();
      onClick?.(event);
    },
    [reset, onClick]
  );

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      type='reset'
      onClick={handleClick}
      {...props}
    />
  );
};

export { FormReset };
export type { FormResetProps };
