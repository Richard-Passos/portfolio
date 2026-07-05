import {
  InputVariant,
  MantineSize,
  TextInput,
  TextInputProps
} from '@mantine/core';

import { MergeProps } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_input]:[--input-size:3rem]',
    lg: '',
    xl: ''
  } satisfies Record<MantineSize, string>,
  variant: {
    default:
      '[&_input]:[--input-bd:var(--color-border)] [&_input]:[--input-bg:var(--color-white)] dark:[&_input]:[--input-bg:var(--color-dark-6)] [&_input:focus]:[--input-bd:var(--color-border)]',
    filled:
      '[&_input]:[--input-bg:var(--color-gray-0)] dark:[&_input]:[--input-bg:var(--color-dark-5)] [&_input:focus]:[--input-bd:transparent]',
    unstyled: ''
  } satisfies Record<InputVariant, string>
};

type TextInputRootProps = MergeProps<
  {
    size?: keyof (typeof CLASS_NAMES)['size'];
    variant?: keyof (typeof CLASS_NAMES)['variant'];
  },
  TextInputProps
>;

const TextInputRoot = ({
  className,
  size = 'sm',
  variant = 'default',
  disabled,
  labelProps,
  ...props
}: TextInputRootProps) => {
  return (
    <TextInput
      size={size}
      variant={variant}
      disabled={disabled}
      aria-disabled={disabled}
      className={cn(
        disabled &&
          'aria-disabled:[&_input]:bg-gray-1 aria-disabled:[&_input]:text-gray-6 dark:aria-disabled:[&_input]:bg-dark-6 dark:aria-disabled:[&_input]:text-dark-2',
        CLASS_NAMES.size[size],
        CLASS_NAMES.variant[variant],
        className
      )}
      labelProps={{
        ...labelProps,
        className: cn('text-sm', labelProps?.className)
      }}
      {...props}
    />
  );
};

export { TextInputRoot };
export type { TextInputRootProps };
