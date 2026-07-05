'use client';

import { FormEvent, ReactNode, useCallback } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { useFormContext } from '@/hooks/contexts';
import { MergeProps } from '@/types';

type FormControlProps = MergeProps<
  {
    name: string;
    error?: ReactNode;
    value?: any;
    onChange?: (event: { target: any }) => Promise<void | boolean> | void;
  },
  SlotProps
>;

const FormControl = ({ name, onChange, ...props }: FormControlProps) => {
  const { register, getFieldState, formState } = useFormContext();

  const { error } = getFieldState(name, formState),
    { onChange: onControlChange, ...control } = register(name);

  const handleChange = useCallback(
    (value: unknown) => {
      const isEvent = (value: unknown): value is FormEvent<HTMLElement> =>
        !!value && typeof value === 'object' && 'target' in value;

      const event = {
        target: isEvent(value) ? value.target : { name, value }
      };

      onControlChange(event);
      onChange?.(event);
    },
    [name, onControlChange, onChange]
  );

  return (
    <Slot
      error={error?.message}
      onChange={handleChange}
      {...control}
      {...props}
    />
  );
};

export { FormControl };
export type { FormControlProps };
