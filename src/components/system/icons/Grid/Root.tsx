import { ComponentProps } from 'react';

import { cn } from '@/utils';

type GridIconProps = ComponentProps<'svg'>;

const GridIcon = ({ className, ...props }: GridIconProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Grid'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M20 5.5v3a1.326 1.326 0 0 1-1.5 1.5h-3A1.326 1.326 0 0 1 14 8.5v-3A1.326 1.326 0 0 1 15.5 4h3A1.326 1.326 0 0 1 20 5.5ZM8.5 4h-3A1.326 1.326 0 0 0 4 5.5v3A1.326 1.326 0 0 0 5.5 10h3A1.326 1.326 0 0 0 10 8.5v-3A1.326 1.326 0 0 0 8.5 4Zm10 10h-3a1.326 1.326 0 0 0-1.5 1.5v3a1.326 1.326 0 0 0 1.5 1.5h3a1.326 1.326 0 0 0 1.5-1.5v-3a1.326 1.326 0 0 0-1.5-1.5Zm-10 0h-3A1.326 1.326 0 0 0 4 15.5v3A1.326 1.326 0 0 0 5.5 20h3a1.326 1.326 0 0 0 1.5-1.5v-3A1.326 1.326 0 0 0 8.5 14Z' />
    </svg>
  );
};

export { GridIcon };
export type { GridIconProps };
