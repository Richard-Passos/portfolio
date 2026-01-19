'use client';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useFormContext } from '@/hooks/contexts';

type FormSubmitMoleculeOwnProps = {
  shouldHandleLoading?: boolean;
};

type FormSubmitMoleculeProps = FormSubmitMoleculeOwnProps &
  Omit<SlotProps, keyof FormSubmitMoleculeOwnProps>;

const FormSubmitMolecule = ({
  shouldHandleLoading = true,
  ...props
}: FormSubmitMoleculeProps) => {
  const {
    formState: { isSubmitting }
  } = useFormContext();

  props = {
    ...props,
    type: 'submit',
    isLoading: shouldHandleLoading && isSubmitting
  } as typeof props;

  return <Slot {...props} />;
};

export default FormSubmitMolecule;
export type { FormSubmitMoleculeProps };
