'use client';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormContext } from '@/hooks/contexts';
import { PolymorphicRef } from '@/types';
import { setRefs } from '@/utils';

type FormControlMoleculeOwnProps = {
  name: string;
  ref?: PolymorphicRef<'div'>;
};

type FormControlMoleculeProps = FormControlMoleculeOwnProps &
  Omit<SlotProps, keyof FormControlMoleculeOwnProps>;

const FormControlMolecule = (
  { name, ...props }: FormControlMoleculeProps,
  ref: FormControlMoleculeProps['ref']
) => {
  const { register, getFieldState, formState } = useFormContext();

  const { error } = getFieldState(name, formState);

  const {
    onChange,
    ref: innerRef,
    ...rest
  } = {
    ...register(name),
    name,
    error: error?.message
  };

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...rest}
      {...props}
      onChange={(event) => {
        onChange(event);

        props.onChange?.(event);
      }}
    />
  );
};

export default forwardRef(FormControlMolecule);
export type { FormControlMoleculeProps };
