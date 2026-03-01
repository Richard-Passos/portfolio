import { ComponentProps } from 'react';

import { cn } from '@/utils';

type RotateIconRootProps = ComponentProps<'svg'>;

const RotateIconRoot = ({ className, ...props }: RotateIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Rotate'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M22 4v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.91a7.985 7.985 0 0 0-14.856 3.108 1 1 0 0 1-.993.892 1.014 1.014 0 0 1-.11-.006 1 1 0 0 1-.886-1.1A9.993 9.993 0 0 1 20 6.008V4a1 1 0 0 1 2 0Zm-.951 8.006a1 1 0 0 0-1.1.886A7.985 7.985 0 0 1 5.09 16H8a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.008a9.993 9.993 0 0 0 17.935-4.884 1 1 0 0 0-.886-1.102Z' />
    </svg>
  );
};

export { RotateIconRoot };
export type { RotateIconRootProps };
