import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export type GradientCardIconProps = ComponentProps<'div'>;

export const GradientCardIcon = ({ className, ...props }: GradientCardIconProps) => {
  return (
    <div
      className={cn(
        'mb-6 flex aspect-square w-fit rounded border bg-muted p-2 text-2xl',
        className
      )}
      {...props}
    />
  );
};
