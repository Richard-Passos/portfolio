import { ComponentProps } from 'react';

import { cn } from '@/utils';

type SmileIconProps = ComponentProps<'svg'>;

const SmileIcon = ({ className, ...props }: SmileIconProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Smile'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm3 6.25c.725 0 1.25.736 1.25 1.75s-.525 1.75-1.25 1.75-1.25-.736-1.25-1.75.525-1.75 1.25-1.75Zm-6 0c.725 0 1.25.736 1.25 1.75S9.725 11.75 9 11.75 7.75 11.014 7.75 10 8.275 8.25 9 8.25Zm7.597 7.204A5.737 5.737 0 0 1 12 17.75a5.775 5.775 0 0 1-4.59-2.299.75.75 0 1 1 1.199-.902A4.267 4.267 0 0 0 12 16.25a4.25 4.25 0 0 0 3.403-1.704.75.75 0 0 1 1.194.908Z' />
    </svg>
  );
};

export { SmileIcon };
export type { SmileIconProps };
