import {
  CheckboxIndicator as UiCheckboxIndicator,
  CheckboxIndicatorProps as UiCheckboxIndicatorProps
} from '@mantine/core';

import { cn } from '@/utils';

type CheckboxIndicatorProps = UiCheckboxIndicatorProps;

const CheckboxIndicator = ({
  color = 'primary',
  variant = 'filled',
  className,
  style,
  ...props
}: CheckboxIndicatorProps) => {
  return (
    <UiCheckboxIndicator
      color={color}
      variant={variant}
      className={cn(
        'dark:bg-dark-6 border-border bg-white data-checked:border-transparent data-checked:bg-(--checkbox-color)',
        className
      )}
      style={{
        ...(color === 'primary' &&
          variant === 'filled' && {
            '--checkbox-icon-color': 'var(--mantine-primary-color-contrast)'
          }),
        ...style
      }}
      {...props}
    />
  );
};

export { CheckboxIndicator };
export type { CheckboxIndicatorProps };
