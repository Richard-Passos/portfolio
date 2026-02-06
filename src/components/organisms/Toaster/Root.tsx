'use client';

import { ComponentProps } from 'react';
import { Toaster, ToasterProps } from 'react-hot-toast';

import { useThemeContext } from '@/hooks/contexts';
import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type ToasterOrganismOwnProps = ToasterProps & {
  ref?: PolymorphicRef<'div'>;
};

type ToasterOrganismProps = ToasterOrganismOwnProps &
  Omit<ComponentProps<'div'>, keyof ToasterOrganismOwnProps>;

const ToasterOrganism = ({
  containerClassName,
  containerStyle,
  gutter,
  position,
  reverseOrder,
  toastOptions,
  children,
  ...props
}: ToasterOrganismProps) => {
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
            'rounded! bg-body! text-text! shadow!',
            toastOptions?.className
          )
        }}
      >
        {children}
      </Toaster>
    </div>
  );
};

export default ToasterOrganism;
export type { ToasterOrganismProps };
