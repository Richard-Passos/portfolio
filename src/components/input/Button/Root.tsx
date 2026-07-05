import { ComponentProps } from 'react';

import { Loader, LoaderProps } from '@/components/feedback';
import { Slot, SlotAsChildProps } from '@/components/misc';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type ButtonRootProps = SlotAsChildProps<
  MergeProps<
    {
      isIconOnly?: boolean;
      isLoading?: boolean;
      color?: 'primary' | 'red';
      variant?: 'filled' | 'default';
      loaderProps?: Partial<LoaderProps>;
    },
    ComponentProps<'button'>
  >
>;

const ButtonRoot = ({
  asChild,
  isIconOnly,
  isLoading,
  variant = 'filled',
  color = 'primary',
  disabled,
  className,
  children,
  loaderProps,
  ...props
}: ButtonRootProps) => {
  const Comp = asChild ? Slot : 'button',
    isDisabled = isLoading || disabled;

  return (
    <Comp
      type='button'
      data-loading={isLoading ? true : undefined}
      aria-disabled={isDisabled ? true : undefined}
      disabled={isDisabled}
      className={cn(
        isDisabled &&
          'aria-disabled:bg-gray-1 aria-disabled:text-gray-5 dark:aria-disabled:bg-dark-6 dark:aria-disabled:text-dark-3',
        isIconOnly && `aspect-square [--button-padding-x:0px] *:*:grow`,
        className
      )}
      {...props}
    >
      {!asChild && isLoading ? <Loader {...loaderProps} /> : children}
    </Comp>
  );
};

export { ButtonRoot };
export type { ButtonRootProps };
