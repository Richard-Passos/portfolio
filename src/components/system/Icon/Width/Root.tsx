import { ComponentProps } from 'react';

export type WidthIconProps = ComponentProps<'svg'>;

export const WidthIcon = (props: WidthIconProps) => {
  return (
    <svg
      aria-hidden
      className={cn('stroke-current', className)}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22 12H2M22 12L18 16M22 12L18 8M2 12L6 16M2 12L6 8'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  );
};
