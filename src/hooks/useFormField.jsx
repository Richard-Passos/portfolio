'use client';

import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormFieldContext } from '@/contexts';

const useFormField = () => {
  const { getFieldState, formState } = useFormContext(),
    { id, name } = useContext(FormFieldContext);

  handleErrors({ id, name });

  const fieldState = getFieldState(name, formState);

  return {
    id,
    descriptionId: `${id}-description`,
    messageId: `${id}-message`,
    name,
    ...fieldState,
  };
};

const handleErrors = (obj) => {
  const errors = {
    id: 'useFormField must be within FormField',
    name: 'FormField must recieve a name as prop',
  };

  Object.entries(obj).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useFormField;
