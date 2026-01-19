'use client';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useFormContext } from '@/hooks/contexts';

type FormResetMoleculeOwnProps = {
  shouldHandleLoading?: boolean;
};

type FormResetMoleculeProps = FormResetMoleculeOwnProps &
  Omit<SlotProps, keyof FormResetMoleculeOwnProps>;

const FormResetMolecule = ({
  shouldHandleLoading = true,
  ...props
}: FormResetMoleculeProps) => {
  const {
    reset,
    formState: { isSubmitting }
  } = useFormContext();

  props = {
    ...props,
    type: 'reset',
    isLoading: shouldHandleLoading && isSubmitting
  } as typeof props;

  return (
    <Slot
      {...props}
      onClick={(event) => {
        event.preventDefault();

        reset();

        props.onClick?.(event);
      }}
    />
  );
};

export default FormResetMolecule;
export type { FormResetMoleculeProps };
