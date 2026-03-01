'use client';

import { ComponentProps } from 'react';
import { Toaster, ToasterProps } from 'react-hot-toast';

import { useThemeContext } from '@/hooks/contexts';
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
  const { theme } = useThemeContext();

  return (
    <div
      data-theme={theme}
      {...props}
    >
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
