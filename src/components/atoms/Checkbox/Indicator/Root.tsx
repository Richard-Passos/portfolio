import { CheckboxIndicator, CheckboxIndicatorProps } from '@mantine/core';

import { cn } from '@/utils';

type CheckboxIndicatorAtomProps = CheckboxIndicatorProps;

const CheckboxIndicatorAtom = ({
  className,
  style,
  ...props
}: CheckboxIndicatorAtomProps) => {
  return (
    <CheckboxIndicator
      className={cn(
        'dark:bg-dark-6 border-border bg-white data-[checked=true]:border-transparent data-[checked=true]:bg-(--checkbox-color)',
        className
      )}
      style={{
        '--checkbox-icon-color': 'var(--mantine-primary-color-contrast)',
        ...style
      }}
      {...props}
    />
  );
};

export default CheckboxIndicatorAtom;
export type { CheckboxIndicatorAtomProps };
