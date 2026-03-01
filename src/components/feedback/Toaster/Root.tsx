'use client';

import { ComponentProps } from 'react';
import { Toaster, ToasterProps } from 'react-hot-toast';

import { MergeProps } from '@/types';
import { cn } from '@/utils';

type ToasterRootProps = MergeProps<ToasterProps, ComponentProps<'div'>>;

const ToasterRoot = ({
  containerClassName,
  containerStyle,
  gutter,
  position,
  reverseOrder,
  toastOptions,
  children,
  ...props
}: ToasterRootProps) => {
  return (
    <div {...props}>
      <Toaster
        containerClassName={containerClassName}
        containerStyle={containerStyle}
        gutter={gutter}
        position={position}
        reverseOrder={reverseOrder}
        toastOptions={{
          ...toastOptions,
          className: cn(
            'rounded! bg-gray-0! dark:bg-dark-5! text-text! shadow!',
            toastOptions?.className
          )
        }}
      >
        {children}
      </Toaster>
    </div>
  );
};

export { ToasterRoot };
export type { ToasterRootProps };
