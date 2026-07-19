import { ComponentProps } from 'react';

export type CaretLeftIconProps = ComponentProps<'svg'>;

export const CaretLeftIcon = (props: CaretLeftIconProps) => {
  return (
    <svg
      aria-hidden
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m8.6 10.7 5.2-4.382A1.34 1.34 0 0 1 16 7.352v9.3a1.34 1.34 0 0 1-2.2 1.034L8.6 13.3a1.706 1.706 0 0 1 0-2.6Z' />
    </svg>
  );
};
