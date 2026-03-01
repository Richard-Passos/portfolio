import { InputVariant, MantineSize, Select, SelectProps } from '@mantine/core';

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
      '[&_input]:border-border [&_input]:[--input-bg:var(--color-white)] dark:[&_input]:[--input-bg:var(--color-dark-6)]',
    filled:
      '[&_input]:[--input-bg:var(--color-gray-0)] dark:[&_input]:[--input-bg:var(--color-dark-5)] [&_input:focus]:[--input-bd:transparent]',
    unstyled: ''
  } satisfies Record<InputVariant, string>
};

type SelectRootProps = MergeProps<
  {
    size?: keyof (typeof CLASS_NAMES)['size'];
    variant?: keyof (typeof CLASS_NAMES)['variant'];
  },
  SelectProps
>;

const SelectRoot = ({
  className,
  size = 'sm',
  variant = 'default',
  disabled,
  comboboxProps,
  labelProps,
  ...props
}: SelectRootProps) => {
  return (
    <Select
      size={size}
      variant={variant}
      disabled={disabled}
      aria-disabled={disabled ? true : undefined}
      className={cn(
        disabled &&
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
            'bg-white border-border dark:bg-dark-6',
            //@ts-ignore
            comboboxProps?.classNames?.dropdown
          ),
          option: cn(
            `dark:hover:bg-dark-4 data-[combobox-selected]:bg-primary-filled! data-[combobox-selected]:text-primary-contrast hover:bg-gray-1`,
            //@ts-ignore
            comboboxProps?.classNames?.option
          )
        }
      }}
      labelProps={{
        ...labelProps,
        className: cn('text-sm', labelProps?.className)
      }}
      {...props}
    />
  );
};

export { SelectRoot };
export type { SelectRootProps };
