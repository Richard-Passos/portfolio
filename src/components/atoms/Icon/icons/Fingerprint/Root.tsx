import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type FingerprintIconAtomOwnProps = {};

type FingerprintIconAtomProps = FingerprintIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof FingerprintIconAtomOwnProps>;

const FingerprintIconAtom = (
  { className, ...props }: FingerprintIconAtomProps,
  ref: FingerprintIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Fingerprint'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M20 10v6a7.9 7.9 0 0 1-1.181 4.573 1 1 0 1 1-1.638-1.146A5.759 5.759 0 0 0 18 16v-6a5.877 5.877 0 0 0-1.1-3.456 1 1 0 1 1 1.623-1.168A7.859 7.859 0 0 1 20 10Zm-8-6a5.114 5.114 0 0 1 .63.033 1 1 0 0 0 .24-1.986A7.247 7.247 0 0 0 12 2a8.009 8.009 0 0 0-8 8v6a1 1 0 0 0 2 0v-6a6.006 6.006 0 0 1 6-6Zm.1 2a.98.98 0 0 0-1.026.975A1 1 0 0 0 12.045 8a2.022 2.022 0 0 1 1.368.587A1.983 1.983 0 0 1 14 10v5.39a5.325 5.325 0 0 1-2.556 4.778 1 1 0 0 0 1.112 1.664A7.354 7.354 0 0 0 16 15.39V10a4.005 4.005 0 0 0-3.9-4ZM9.445 8.181a1 1 0 0 0-1.264.633A3.757 3.757 0 0 0 8 10v3.93a4.019 4.019 0 0 1-.823 2.431 1 1 0 1 0 1.586 1.218A6.021 6.021 0 0 0 10 13.93V10a1.775 1.775 0 0 1 .079-.554 1 1 0 0 0-.634-1.265ZM12 16a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z' />
    </svg>
  );
};

export default forwardRef(FingerprintIconAtom);
export type { FingerprintIconAtomProps };
