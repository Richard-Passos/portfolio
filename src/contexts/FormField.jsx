'use client';

import { createContext, useId } from 'react';

const FormFieldContext = createContext({ id: '', name: '' });

const FormFieldProvider = ({ value, ...props }) => {
  const id = useId();

  return (
    <FormFieldContext.Provider
      value={{ id, ...value }}
      {...props}
    />
  );
};

export default FormFieldContext;
export { FormFieldProvider };
