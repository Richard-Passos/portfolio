import {
  Textarea,
  TextareaProps,
  createPolymorphicComponent
} from '@mantine/core';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_textarea]:[--input-size:theme(height.24)] [&_textarea]:[--input-padding-y:--input-padding]',
    lg: '',
    xl: ''
  },
  variant: {
    default:
      '[&_textarea]:[--input-bd:theme(colors.border)] [&_textarea:focus]:[--input-bd:--input-bd-focus] [&_textarea]:[--input-bg:theme(colors.white)] dark:[&_textarea]:[--input-bg:theme(colors.dark.6)]',
    filled:
      '[&_textarea]:[--input-bg:theme(colors.gray.0)] dark:[&_textarea]:[--input-bg:theme(colors.dark.5)]',
    unstyled: ''
  }
};

type TextareaAtomOwnProps = {
  ref?: PolymorphicRef<'textarea'>;
  size?: keyof (typeof CLASS_NAMES)['size'];
  variant?: keyof (typeof CLASS_NAMES)['variant'];
};

type TextareaAtomProps = TextareaAtomOwnProps &
  Omit<TextareaProps, keyof TextareaAtomOwnProps>;

const TextareaAtom = ({
  className,
  size = 'sm',
  variant = 'default',
  disabled,
  labelProps,
  ...props
}: TextareaAtomProps) => {
  return (
    <Textarea
      aria-disabled={disabled}
      className={cn(
        `aria-disabled:[&_textarea]:bg-gray-1 aria-disabled:[&_textarea]:text-gray-6 dark:aria-disabled:[&_textarea]:bg-dark-6 dark:aria-disabled:[&_textarea]:text-dark-2`,
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

export default createPolymorphicComponent<'textarea', TextareaAtomProps>(
  TextareaAtom
);
export type { TextareaAtomProps };
