import { ComponentProps } from 'react';

export type CaretRightIconProps = ComponentProps<'svg'>;

export const CaretRightIcon = (props: CaretRightIconProps) => {
  return (
    <svg
      aria-hidden
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m15.4 13.3-5.2 4.382A1.34 1.34 0 0 1 8 16.648v-9.3a1.34 1.34 0 0 1 2.2-1.034l5.2 4.386a1.706 1.706 0 0 1 0 2.6Z'></path>
    </svg>
  );
};
