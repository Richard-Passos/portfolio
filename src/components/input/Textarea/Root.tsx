import {
  InputVariant,
  MantineSize,
  Textarea,
  TextareaProps
} from '@mantine/core';

import { MergeProps } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_textarea]:[--input-padding-y:var(--input-padding)] [&_textarea]:[--input-size:6rem]',
    lg: '',
    xl: ''
  } satisfies Record<MantineSize, string>,
  variant: {
    default:
      '[&_textarea]:[--input-bd:var(--color-border)] [&_textarea]:[--input-bg:var(--color-white)] dark:[&_textarea]:[--input-bg:var(--color-dark-6)] [&_textarea:focus]:[--input-bd:var(--color-border)]',
    filled:
      '[&_textarea]:[--input-bg:var(--color-gray-0)] dark:[&_textarea]:[--input-bg:var(--color-dark-5)] [&_textarea:focus]:[--input-bd:transparent]',
    unstyled: ''
  } satisfies Record<InputVariant, string>
};

type TextareaRootProps = MergeProps<
  {
    size?: keyof (typeof CLASS_NAMES)['size'];
    variant?: keyof (typeof CLASS_NAMES)['variant'];
  },
  TextareaProps
>;

const TextareaRoot = ({
  className,
  size = 'sm',
  variant = 'default',
  disabled,
  labelProps,
  ...props
}: TextareaRootProps) => {
  return (
    <Textarea
      size={size}
      variant={variant}
      disabled={disabled}
      aria-disabled={disabled ? true : undefined}
      className={cn(
        disabled &&
          'aria-disabled:[&_textarea]:bg-gray-1 aria-disabled:[&_textarea]:text-gray-6 dark:aria-disabled:[&_textarea]:bg-dark-6 dark:aria-disabled:[&_textarea]:text-dark-2',
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

export { TextareaRoot };
export type { TextareaRootProps };
