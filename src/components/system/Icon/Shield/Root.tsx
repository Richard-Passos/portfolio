import { ComponentProps } from 'react';

export type ShieldIconProps = ComponentProps<'svg'>;

export const ShieldIcon = (props: ShieldIconProps) => {
  return (
    <svg
      aria-hidden
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M21 10.889c0 6.667-5.667 10-9 11.111-3.333-1.111-9-4.444-9-11.111V5a29.748 29.748 0 0 0 9.018-3A29.069 29.069 0 0 0 21 5Z' />
    </svg>
  );
};
