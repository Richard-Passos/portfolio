'use client';

import { ComponentProps } from 'react';
import { Toaster as UiToaster, ToasterProps as UiToasterProps } from 'react-hot-toast';

import { Theme } from '@/components/misc';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type ToasterProps = MergeProps<UiToasterProps, ComponentProps<'div'>>;

const Toaster = ({
  containerClassName,
  containerStyle,
  gutter,
  position,
  reverseOrder,
  toastOptions,
  children,
  ...props
}: ToasterProps) => {
  return (
    <Theme>
      <div {...props}>
        <UiToaster
          containerClassName={containerClassName}
          containerStyle={containerStyle}
          gutter={gutter}
          position={position}
          reverseOrder={reverseOrder}
          toastOptions={{
            ...toastOptions,
            className: cn('rounded! bg-muted! text-body-emphasis! shadow!', toastOptions?.className)
          }}
        >
          {children}
        </UiToaster>
      </div>
    </Theme>
  );
};

export { Toaster };
export type { ToasterProps };
