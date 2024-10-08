import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PaperPlaneIconAtomOwnProps = {};

type PaperPlaneIconAtomProps = PaperPlaneIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof PaperPlaneIconAtomOwnProps>;

const PaperPlaneIconAtom = (
  { className, ...props }: PaperPlaneIconAtomProps,
  ref: PaperPlaneIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-icon='Paper plane'
      ref={ref}
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M227.82129,47.9209,175.26758,234.249A15.86994,15.86994,0,0,1,161.207,245.84961q-.69581.05859-1.38379.05762a15.85235,15.85235,0,0,1-14.41406-9.15235l-36.916-77.93359,53.28223-53.28223a8.00052,8.00052,0,0,0-11.31445-11.31445L97.17871,147.50684l-77.93359-36.916A15.9995,15.9995,0,0,1,21.751,80.73242L208.0791,28.17871A15.99909,15.99909,0,0,1,227.82129,47.9209Z' />
    </svg>
  );
};

export default forwardRef(PaperPlaneIconAtom);
export type { PaperPlaneIconAtomProps };
