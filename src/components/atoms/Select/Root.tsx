import { Select, SelectProps, createPolymorphicComponent } from '@mantine/core';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

const CLASS_NAMES = {
  size: {
    xs: '',
    sm: '',
    md: '[&_input]:[--input-size:3rem]',
    lg: '',
    xl: '[&_input]:[--input-bd:var(--color-border)] [&_input:focus]:[--input-bd:var(--input-bd-focus)] [&_input]:[--input-bg:var(--color-white)] dark:[&_input]:[--input-bg:var(--color-dark-6)]'
  },
  variant: {
    default:
      '[&_input]:[--input-bd:var(--color-border)] [&_input:focus]:[--input-bd:var(--input-bd-focus)] [&_input]:[--input-bg:var(--color-white)] dark:[&_input]:[--input-bg:var(--color-dark-6)]',
    filled:
      '[&_input]:[--input-bg:var(--color-gray-0)] dark:[&_input]:[--input-bg:var(--color-dark-5)]',
    unstyled: ''
  }
};

type SelectAtomOwnProps = {
  ref?: PolymorphicRef<'input'>;
  size?: keyof (typeof CLASS_NAMES)['size'];
  variant?: keyof (typeof CLASS_NAMES)['variant'];
};

type SelectAtomProps = SelectAtomOwnProps &
  Omit<SelectProps, keyof SelectAtomOwnProps>;

const SelectAtom = ({
  className,
  size = 'sm',
  variant = 'default',
  disabled,
  comboboxProps,
  labelProps,
  ...props
}: SelectAtomProps) => {
  return (
    <Select
      aria-disabled={disabled}
      className={cn(
        `aria-disabled:[&_input]:bg-gray-1 aria-disabled:[&_input]:text-gray-6 dark:aria-disabled:[&_input]:bg-dark-6 dark:aria-disabled:[&_input]:text-dark-2`,
        CLASS_NAMES.size[size],
        CLASS_NAMES.variant[variant],
        className
      )}
      comboboxProps={{
        withinPortal: false,
        ...comboboxProps,
        classNames: {
          ...comboboxProps?.classNames,
          dropdown: cn(
            `
              bg-white

              [--popover-border-color:var(--color-border)]

              dark:bg-dark-6
            `,
            //@ts-ignore
            comboboxProps?.classNames?.dropdown
          ),
          option: cn(
            `
              dark:hover:bg-dark-7

              data-[combobox-selected]:!bg-primary-filled
              data-[combobox-selected]:text-primary-contrast

              hover:bg-gray-0
            `,
            //@ts-ignore
            comboboxProps?.classNames?.option
          )
        }
      }}
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

export default createPolymorphicComponent<'input', SelectAtomProps>(SelectAtom);
export type { SelectAtomProps };
