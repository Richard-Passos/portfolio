'use client';

import { useWatch } from 'react-hook-form';

import { useFormContext } from '@/hooks/contexts';

import { FormControl, FormControlProps as FormWatchProps } from './Control';

/**
 * Syncs a field's value with the form state; specifically used to
 * handle edge cases where fields fail to update during a form reset.
 */
const FormWatch = ({ name, ...props }: FormWatchProps) => {
  const { control } = useFormContext(),
    value = useWatch({ control, name });

  return (
    <FormControl
      value={value}
      name={name}
      {...props}
    />
  );
};

export { FormWatch };
export type { FormWatchProps };
