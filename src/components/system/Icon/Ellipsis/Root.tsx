import { ComponentProps } from 'react';

export type EllipsisIconProps = ComponentProps<'svg'>;

export const EllipsisIcon = (props: EllipsisIconProps) => {
  return (
    <svg
      aria-hidden
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      />
    </svg>
  );
};
