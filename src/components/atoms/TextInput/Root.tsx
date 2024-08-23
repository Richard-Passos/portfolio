import {
  TextInput,
  TextInputProps,
  createPolymorphicComponent
} from '@mantine/core';
import { forwardRef } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_input]:[--input-size:theme(height.12)]',
    lg: '',
    xl: ''
  },
  variant: {
    default:
      '[&_input]:[--input-bg:theme(colors.white)] dark:[&_input]:[--input-bg:theme(colors.black)]',
    filled:
      '[&_input]:[--input-bg:theme(colors.gray.1)] dark:[&_input]:[--input-bg:theme(colors.dark.5)]',
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

const TextInputAtom = (
  {
    className,
    size = 'sm',
    variant = 'default',
    labelProps,
    ...props
  }: TextInputAtomProps,
  ref: TextInputAtomProps['ref']
) => {
  return (
    <TextInput
      className={cn(
        CLASS_NAMES.size[size],
        CLASS_NAMES.variant[variant],
        className
      )}
      labelProps={{
        ...labelProps,
        className: cn('text-sm', labelProps?.className)
      }}
      ref={ref}
      size={size}
      variant={variant}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'input', TextInputAtomProps>(
  forwardRef(TextInputAtom)
);
export type { TextInputAtomProps };