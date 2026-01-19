'use client';

import { FormEvent } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useFormContext } from '@/hooks/contexts';
import { setRefs } from '@/utils';

type FormControlMoleculeOwnProps = {
  name: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: { target: any }) => Promise<void | boolean> | void;
};

type FormControlMoleculeProps = FormControlMoleculeOwnProps &
  Omit<SlotProps, keyof FormControlMoleculeOwnProps>;

const FormControlMolecule = ({
  name,
  ref,
  ...props
}: FormControlMoleculeProps) => {
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
      onChange={(value: unknown) => {
        const isEvent = (value: unknown): value is FormEvent<HTMLElement> =>
          !!(value && typeof value === 'object' && 'target' in value);

        const event = {
          target: isEvent(value) ? value.target : { name, value }
        };

        onChange(event);

        props.onChange?.(event);
      }}
    />
  );
};

export default FormControlMolecule;
export type { FormControlMoleculeProps };
