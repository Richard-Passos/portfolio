import { ComponentProps } from 'react';

import { cn } from '@/utils';

type InstagramIconRootProps = ComponentProps<'svg'>;

const InstagramIconRoot = ({ className, ...props }: InstagramIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Instagram'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M20.937 8.286c-.068-1.442-.397-2.719-1.454-3.771-1.052-1.052-2.329-1.382-3.771-1.454-1.486-.084-5.939-.084-7.425 0-1.438.068-2.715.398-3.771 1.45s-1.381 2.33-1.454 3.771c-.084 1.486-.084 5.94 0 7.427.068 1.442.398 2.719 1.454 3.771s2.329 1.382 3.771 1.454c1.486.084 5.939.084 7.425 0 1.442-.068 2.719-.398 3.771-1.454 1.052-1.052 1.381-2.33 1.454-3.771.084-1.486.084-5.936 0-7.423ZM12 16.75c-2.619 0-4.75-2.131-4.75-4.75S9.381 7.25 12 7.25s4.75 2.131 4.75 4.75-2.131 4.75-4.75 4.75Zm5.52-9.25c-.552 0-1.005-.448-1.005-1s.443-1 .995-1h.01a1 1 0 1 1 0 2ZM15.25 12c0 1.792-1.458 3.25-3.25 3.25S8.75 13.792 8.75 12 10.208 8.75 12 8.75s3.25 1.458 3.25 3.25Z' />
    </svg>
  );
};

export { InstagramIconRoot };
export type { InstagramIconRootProps };
