import { Checkbox, CheckboxProps } from '@mantine/core';

type CheckboxRootProps = CheckboxProps;

const CheckboxRoot = ({ style, ...props }: CheckboxRootProps) => {
  return (
    <Checkbox
      style={{
        '--divider-color': 'var(--color-boder)',
        ...style
      }}
      {...props}
    />
  );
};

export { CheckboxRoot };
export type { CheckboxRootProps };
