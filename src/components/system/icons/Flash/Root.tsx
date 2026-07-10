import { ComponentProps } from 'react';

export type FlashIconProps = ComponentProps<'svg'>;

export const FlashIcon = (props: FlashIconProps) => {
  return (
    <svg
      aria-hidden
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M19.457 10.8a.5.5 0 0 0-.457-.3h-4.5V3a.5.5 0 0 0-.872-.334l-9 10A.5.5 0 0 0 5 13.5h4.5V21a.5.5 0 0 0 .321.467.506.506 0 0 0 .179.033.5.5 0 0 0 .372-.166l9-10a.5.5 0 0 0 .085-.534Z'></path>
    </svg>
  );
};
