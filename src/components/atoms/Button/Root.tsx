import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const PRIMARY_VARIANTS = ['filled'];

type ButtonAtomOwnProps = {
  isIconOnly?: boolean;
  isLoading?: boolean;
};

type ButtonAtomProps = ButtonAtomOwnProps &
  Omit<
    ButtonProps & Omit<ComponentProps<'button'>, keyof ButtonProps>,
    'loading' | keyof ButtonAtomOwnProps
  >;

const ButtonAtom = ({
  isIconOnly,
  isLoading,
  variant = 'filled',
  color = 'primary',
  disabled,
  className,
  style,
  ...props
}: ButtonAtomProps) => {
  const isPrimary = color === 'primary' && PRIMARY_VARIANTS.includes(variant);

  return (
    <Button
      aria-disabled={disabled}
      className={cn(
        `aria-disabled:bg-gray-1 aria-disabled:text-gray-5 dark:aria-disabled:bg-dark-6 dark:aria-disabled:text-dark-3`,
        isIconOnly && `aspect-square [--button-padding-x:0px] *:*:grow`,
        className
      )}
      color={color}
      disabled={disabled}
      loading={isLoading}
      style={{
        ...(isPrimary && {
          '--button-color': 'var(--mantine-primary-color-contrast)'
        }),
        ...style
      }}
      variant={variant}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'button', ButtonAtomProps>(
  ButtonAtom
);

export type { ButtonAtomProps };
