import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type RocketIconAtomOwnProps = {};

type RocketIconAtomProps = RocketIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof RocketIconAtomOwnProps>;

const RocketIconAtom = (
  { className, ...props }: RocketIconAtomProps,
  ref: RocketIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Rocket'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M8.9 7.08c-1.21 1.7-1.84 3.36-2.48 5.43l-3.37.75c-.01.01-.03.01-.05.01-.07 0-.14-.03-.19-.09a.232.232 0 0 1-.04-.25l.96-2.39a5.238 5.238 0 0 1 4.01-3.22l1.16-.24Zm1.86 13.87c-.02.09.01.18.08.24.04.04.1.06.16.06.03 0 .06-.01.09-.02l2.39-.96c1.7-.67 2.94-2.2 3.22-3.99l.23-1.08c-1.71 1.2-3.37 1.8-5.42 2.38l-.75 3.37Zm-3.21-8.69c-.15.47-.3.96-.46 1.48a.49.49 0 0 0 .12.5l2.52 2.52c.1.1.23.15.36.15.04 0 .09-.01.13-.02.54-.15 1.06-.29 1.54-.43.73-.21 1.39-.43 2.02-.69l-5.51-5.5c-.26.62-.49 1.28-.72 1.99Zm11.1.19c-.52.52-1.02.97-1.5 1.36-.8.64-1.57 1.13-2.39 1.52l-.02-.02-6-5.99q-.01-.01-.02-.01c.41-.84.92-1.64 1.59-2.46.38-.46.81-.93 1.31-1.43C13.6 3.43 16.25 3 18.17 3c.99 0 1.78.11 2.2.19.21.04.36.19.4.39.24 1.25.89 5.86-2.12 8.87ZM17.5 8.78c0-1.24-1.01-2.25-2.25-2.25S13 7.54 13 8.78s1.01 2.24 2.25 2.24 2.25-1 2.25-2.24Z' />
    </svg>
  );
};

export default forwardRef(RocketIconAtom);
export type { RocketIconAtomProps };
