import {
  TextInput,
  TextInputProps,
  createPolymorphicComponent
} from '@mantine/core';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_input]:[--input-size:3rem]',
    lg: '',
    xl: ''
  },
  variant: {
    default:
      '[&_input]:[--input-bd:var(--color-border)] [&_input]:[--input-bg:var(--color-white)] dark:[&_input]:[--input-bg:var(--color-dark-6)] [&_input:focus]:[--input-bd:var(--color-border)]',
    filled:
      '[&_input]:[--input-bg:var(--color-gray-0)] dark:[&_input]:[--input-bg:var(--color-dark-5)] [&_input:focus]:[--input-bd:transparent]',
    unstyled: ''
  }
};

type TextInputAtomOwnProps = {
  ref?: PolymorphicRef<'input'>;
  size?: keyof (typeof CLASS_NAMES)['size'];
  variant?: keyof (typeof CLASS_NAMES)['variant'];
};

type TextInputAtomProps = TextInputAtomOwnProps &
  Omit<TextInputProps, keyof TextInputAtomOwnProps>;

const TextInputAtom = ({
  className,
  size = 'sm',
  variant = 'default',
  disabled,
  labelProps,
  ...props
}: TextInputAtomProps) => {
  return (
    <TextInput
      aria-disabled={disabled}
      className={cn(
        `aria-disabled:[&_input]:bg-gray-1 aria-disabled:[&_input]:text-gray-6 dark:aria-disabled:[&_input]:bg-dark-6 dark:aria-disabled:[&_input]:text-dark-2`,
        CLASS_NAMES.size[size],
        CLASS_NAMES.variant[variant],
        className
      )}
      disabled={disabled}
      labelProps={{
        ...labelProps,
        className: cn('text-sm', labelProps?.className)
      }}
      size={size}
      variant={variant}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'input', TextInputAtomProps>(
  TextInputAtom
);
export type { TextInputAtomProps };
