'use client';

import { useWatch } from 'react-hook-form';

import { useFormContext } from '@/hooks/contexts';

import FormControl, { FormControlProps } from '../Control';

type FormWatchMoleculeOwnProps = {};

type FormWatchMoleculeProps = FormWatchMoleculeOwnProps &
  Omit<FormControlProps, keyof FormWatchMoleculeOwnProps>;

const FormWatchMolecule = ({ name, ...props }: FormWatchMoleculeProps) => {
  const { control } = useFormContext(),
    value = useWatch({
      control,
      name
    });

  props = {
    value,
    ...props
  } as typeof props;

  return (
    <FormControl
      name={name}
      {...props}
    />
  );
};

export default FormWatchMolecule;
export type { FormWatchMoleculeProps };
