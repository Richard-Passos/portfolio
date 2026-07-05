import { ComponentProps } from 'react';

import { cn } from '@/utils';

type GlobeIconRootProps = ComponentProps<'svg'>;

const GlobeIconRoot = ({ className, ...props }: GlobeIconRootProps) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Globe'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M6.83 12.75a18.342 18.342 0 0 0 3 9.01 10.006 10.006 0 0 1-7.8-9.01Zm3-10.51a10.006 10.006 0 0 0-7.8 9.01h4.8a18.342 18.342 0 0 1 3-9.01ZM12.2 2h-.4l-.3.43a17.092 17.092 0 0 0-3.17 8.82h7.34a17.092 17.092 0 0 0-3.17-8.82ZM8.33 12.75a17.092 17.092 0 0 0 3.17 8.82l.3.43h.4l.3-.43a17.092 17.092 0 0 0 3.17-8.82Zm8.84 0a18.342 18.342 0 0 1-3 9.01 10.006 10.006 0 0 0 7.8-9.01Zm4.8-1.5a10.006 10.006 0 0 0-7.8-9.01 18.342 18.342 0 0 1 3 9.01Z' />
    </svg>
  );
};

export { GlobeIconRoot };
export type { GlobeIconRootProps };
