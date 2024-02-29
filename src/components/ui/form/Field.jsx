import { forwardRef } from 'react';

import { FormFieldProvider } from '@/contexts';
import { cn } from '@/utils';

const FormField = ({ name, className, ...props }, ref) => {
  return (
    <FormFieldProvider value={{ name }}>
      <section
        className={cn('flex flex-col', className)}
        ref={ref}
        {...props}
      />
    </FormFieldProvider>
  );
};

export default forwardRef(FormField);
